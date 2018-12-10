const Koa = require('koa');
const app = new Koa();
app.listen(3000);

// Not Found: 并没有告诉 Koa 应该显示什么内容。仅仅是搭建了HTTP服务