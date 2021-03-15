import Compiler from "../srjpack/Compiler";
const pluginName = 'ConsolePlugin'

class ConsolePlugin{
    public title:string
    constructor(title) {
        this.title = title
    }
    apply(compiler:Compiler){
        const self = this;
        compiler.hooks.run.tap(pluginName,(compilation)=>{
            console.log(compilation);
            console.log(`${self} webpack build process is starting !!!`);
        })
    }
}

module.exports =  ConsolePlugin