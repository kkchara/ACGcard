const http = require('http');
const fs = require('fs');
const path = require('path');

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  // 检查响应头是否已经发送
  const sendResponse = (statusCode, contentType, data) => {
    if (!res.headersSent) {
      res.writeHead(statusCode, { 'Content-Type': contentType });
      res.end(data);
    }
  };

  // 处理不同的 API 路径
  if (req.url === '/api/greet' && req.method === 'GET') {
    // 返回一个简单的 JSON 响应
    sendResponse(200, 'application/json', JSON.stringify({ message: 'Hello, World!' }));
  } else if (req.url === '/api/time' && req.method === 'GET') {
    // 返回当前时间的 JSON 响应
    sendResponse(200, 'application/json', JSON.stringify({ current_time: new Date().toISOString() }));
  } else if (req.url === '/api/image' && req.method === 'GET') {
    // 返回本地图片
    const imagePath = path.join(__dirname, '../static/pic/back1.png');
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        sendResponse(500, 'text/plain', 'Internal Server Error');
      } else {
        sendResponse(200, 'image/jpeg', data);
      }
    });
  } else {
    // 处理未找到的路径
    sendResponse(404, 'text/plain', 'Not Found');
  }
});

// 监听指定的端口和主机
const PORT = 3003;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
