# BiliDynTheme

一个用于让哔哩哔哩动态页跟随系统明暗主题切换的小脚本。

## 功能说明

- 监听系统主题变化（`prefers-color-scheme`）
- 在深色模式时为页面根元素添加 `bili_dark` 类名
- 在浅色模式时移除 `bili_dark` 类名

## 项目结构

```text
.
└── script.js    # 主题切换脚本
```

## 使用方式

你可以通过以下任一方式加载 `script.js`：

1. 浏览器开发者工具临时执行（调试）
2. 浏览器扩展（如 Tampermonkey）长期注入
3. 在自建页面中以 `<script>` 引入

> 脚本依赖页面样式中存在 `bili_dark` 对应的深色主题规则。

## 工作原理

脚本会读取系统主题状态，并在主题变化时切换 `document.documentElement` 上的 `bili_dark` 类名，从而触发页面对应的深浅色样式。

## 兼容性

- 需要支持 `window.matchMedia` 的现代浏览器
- 需要支持 `MediaQueryList` 事件监听（`change`）

## 已知问题

- 当前 `script.js` 中使用了未定义的 `mediaQuery` 变量，直接运行会报错。

## 后续计划

- 修复 `mediaQuery` 变量初始化问题
- 增加首次加载时的主题同步逻辑
- 补充用户脚本头信息与安装说明

## 贡献

欢迎提交 Issue 或 PR 改进脚本与文档。

## 许可证

仓库当前未提供许可证文件；在补充 LICENSE 前，默认保留所有权利。
