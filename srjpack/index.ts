import Compiler from "./Compiler"
const configOptions = require("../srjpackConfig")

const compiler = new Compiler(configOptions)

compiler.run();
