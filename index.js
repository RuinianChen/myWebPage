const express = require('express'); // 引入 Express 框架
const path = require('path'); // 引入路径模块

const app = express(); // 创建 Express 应用实例
const port = 80; // 设置服务器运行端口为 80（HTTP 默认端口）

// 设置静态文件目录，将 public 文件夹中的内容作为静态资源托管
app.use(express.static('public'));

// 启动服务器
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
