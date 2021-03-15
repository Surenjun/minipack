import {SyncHook} from "tapable"
import {UnsetAdditionalOptions} from "tapable"
import Compilation from "./Compilation"
import Template from "./Template";
class Compiler {
    public options: Options;
    public modules: Array<{ filename: string, dependencies: string[], transformCode: string }>
    public hooks: {
        run: SyncHook<[thisArg: any, ...argArray: any[]], any, UnsetAdditionalOptions>
    }

    constructor(options) {
        this.options = options;
        this.modules = [];

        //配置plugins的钩子
        this.hooks = {
            run: new SyncHook(['compilation']),
        }
    }

    run() {
        const {options} = this;
        const compilation = this.newCompilation();

        //注册调度 初始化的plugins钩子
        this.hooks.run.call(compilation);
        //找到entry 按照入口文件执行
        const entryModule = compilation.buildModule(options.entry, true);
        this.modules.push(entryModule)
        this.recursiveModules(compilation, this.modules)
        this.emitTemp()
    }


    //递归拿到所有的模块和依赖
    recursiveModules(compilation, modules) {
        const self = this;
        modules.map(_module => {
            _module.dependencies.map((dependency) => {
                const nextDependency = compilation.buildModule(dependency, false)
                self.modules.push(nextDependency);
                if (nextDependency.dependencies.length) {
                    self.recursiveModules(compilation, [nextDependency])
                }
            });
        })
    }

    newCompilation() {
        return this.createCompilation();
    }

    createCompilation() {
        return new Compilation(this);
    }

    emitTemp(){
        new Template(this.modules).emitFiles()
    }
}

export default Compiler

export interface Options {
    // 入口
    entry: string
    // 出口
    output: {
        path:string
        filename:string
    }
}
