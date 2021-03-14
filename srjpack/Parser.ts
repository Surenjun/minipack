const {default: traverse} = require("babel-traverse")
const babylon = require("babylon")
const {transformFromAst} = require("@babel/core")

const fs = require('fs')
const path= require('path')
class Parser {

    static ast(path): string {
        //读取配置文件
        const configContent = fs.readFileSync(path, 'utf-8');
        //使用babel拿到ast树
        return babylon.parse(configContent, {
            sourceType: 'module',
        })
    }

    static getDependency(ast,absolutePath:string) {
        const dependencies = [];

        //TODO 判断是引用的 是模块or依赖
        traverse(ast, {
            ImportDeclaration: ((paths) => {
                const dependencyPath = path.normalize(`${absolutePath}/../${paths.node.source.value}`)
                //简单的替换掉 moduleName和 moduleKey相同
                paths.node.source.value =  absolutePath?`./${dependencyPath}`:dependencyPath
                dependencies.push(
                    absolutePath?`./${dependencyPath}`:dependencyPath
                )
            }),

        })
        return dependencies;
    }

    //TODO loader在这执行 暂时默认只处理js
    static transform(ast,absolutePath:string) {
        //js的ast转回原code
        const {code} = transformFromAst(ast, null, {
            presets: ['@babel/preset-env'],
        })
        return code;
    }


}

export default Parser