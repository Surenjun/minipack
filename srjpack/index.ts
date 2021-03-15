import Compiler from "./Compiler"
const configOptions = require("../srjpackConfig")

const compiler = new Compiler(configOptions)

for (const plugin of configOptions.plugins){
    //执行plugin
    plugin.apply(compiler)
}
compiler.run();
