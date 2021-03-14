const {join} = require("path")
const configOptions = require("../srjpackConfig")
const { writeFileSync } = require('fs');

class Template {

    public modules: Array<{ filename: string, dependencies: string[], transformCode: string }>

    constructor(modules) {this.modules = modules}

    emitFiles() {
        const {path, filename} = configOptions.output;
        let _modules = ''
        const outputPath = join(
            path, filename
        )

        this.modules.map((_module) => {
            _modules += `'${_module.filename}':function(module,exports,require){${_module.transformCode}},
        `
        })

        const tempalte =
            `(function (modules) {
                var installedModules = {};
                function __webpack_require__(moduleId) {
                  // Check if module is in cache
                  if (installedModules[moduleId]) {
                    return installedModules[moduleId].exports;
                  }
                  // module.exports = {};
                  var module = (installedModules[moduleId] = {
                    exports: {},
                  });
                  modules[moduleId].call(
                    module.exports,
                    module,
                    module.exports,
                    __webpack_require__
                  );
                  return module.exports;
                }
                return __webpack_require__('${configOptions.entry}');
            })({${_modules}});`;
        writeFileSync(outputPath, tempalte, 'utf8');
    }
}

export default Template