import traverse from "babel-traverse"
import Compiler,{Options} from "./Compiler"
import Parser from "./Parser"
const {join} = require('path')

class Compilation {
    public options: Options;
    public modules: Array<{ filename: string, dependencies: string[], transformCode: string }>

    constructor(compiler:Compiler) {
        const { options, modules } = compiler;
        this.options = options;
        this.modules= modules;
    }

    public buildModule(filename:string, isEntry:boolean) {
        let ast = '';
        let absolutePath = '';
        //判断是否有entry
        if(!isEntry){
            //只处理.js文件
            absolutePath = join(process.cwd(),`${filename}.js`)
            ast = Parser.ast(absolutePath);
        }else{
            ast = Parser.ast(filename)
        }
        // 拿到模块引用的的模块和依赖
        const dependencies = Parser.getDependency(ast,filename);
        const transformCode = Parser.transform(ast,filename);

        return {
            //模块名称
            filename,
            //依赖的模块和依赖
            dependencies,
            //处理过的源代码
            transformCode,
        }
    }

}

export default Compilation