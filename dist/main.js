(function (modules) {
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
                return __webpack_require__('./src/index.js');
            })({'./src/index.js':function(module,exports,require){"use strict";

var _data = _interopRequireDefault(require("./src/modules/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("\u4E3B\u5165\u53E3\uFF1A\u5F15\u7528data\u6A21\u5757\u7684\u503C\uFF1A".concat(_data["default"]));},
        './src/modules/data':function(module,exports,require){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _result = _interopRequireDefault(require("./src/modules/result"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引用下result模块 模拟下webpack模块机制
var _default = _result["default"];
exports["default"] = _default;},
        './src/modules/result':function(module,exports,require){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var result = 'my name is Surenjun';
var _default = result;
exports["default"] = _default;},
        });