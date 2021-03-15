## Install

---

### use yarn
```yarn init```

### configure your srjpackConfig.json

```
yarn build  
```
### webpack工作流程

> Compiler模块是webpack的核心

- 创建 **Compiler** ->
- 调用 **compiler.run** 开始构建 ->
- 创建 **Compilation** ->
- 基于**config.json**配置从**entry**入口开始创建 **Chunk** ->
- 使用 **Parser** 从 **Chunk** 开始解析依赖 ->
- 使用 **Module** 和 **Dependency** 管理代码模块相互关系 ->
- 使用 **Template** 基于 **Compilation** 的数据生成结果代码

### Todolist

- [x] 模块依赖查找
- [x] 能够打包处理JS
- [ ] Loaders
- [x] Plugins
- [ ] TreeShaking

### TODO 如何自定义loader和plugin


