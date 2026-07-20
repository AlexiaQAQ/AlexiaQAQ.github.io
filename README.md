# 个人简历

在线简历页面，纯静态 HTML + CSS + JS，支持亮色/暗色主题切换与鼠标跟随光圈效果。

在线访问：https://alexiaqaq.github.io/

## 文件结构

```
├── index.html      # 页面结构
├── css/style.css   # 样式与主题变量
├── js/script.js    # 鼠标光圈跟随 + 主题切换逻辑
├── .gitignore
├── README.md
└── img/
    └── head_img.jpg
```

## 使用

直接用浏览器打开 `index.html` 即可。

- 右上角按钮切换亮/暗主题，偏好会持久化到 `localStorage`
- 鼠标光圈：320px 半径渐变圆，带惯性平滑跟随，亮色模式 `multiply` 混合、暗色模式 `screen` 混合
- 支持浏览器打印（`Ctrl+P`），打印时自动隐藏主题按钮和光圈
