const express = require('express'); // 引入 Express 框架
const path = require('path'); // 引入路径模块

const app = express(); // 创建 Express 应用实例
const PORT = 3000; // 设置服务器运行端口（推荐非 80）

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'html'))); // 提供 HTML 文件夹
app.use('/css', express.static(path.join(__dirname, 'css'))); // 提供 CSS 文件夹
app.use('/js', express.static(path.join(__dirname, 'js'))); // 提供 JS 文件夹
app.use('/src', express.static(path.join(__dirname, 'src'))); // 提供 src 文件夹

// 默认返回首页（home.html）
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'home.html'));
});

// 启动服务器
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
});