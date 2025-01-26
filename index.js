const express = require('express'); // 引入 Express 框架
const path = require('path'); // 引入路径模块

const app = express(); // 创建 Express 应用实例
const port = 80; // 使用 HTTP 默认端口 80

// 设置静态文件目录，将 public 文件夹作为根目录
app.use(express.static(path.join(__dirname, 'public')));

// 默认返回 home.html 文件
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'home.html'));
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});