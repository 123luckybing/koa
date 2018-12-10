const Koa = require('koa');
const app = new Koa();
// 读取模版文件
const fs = require('fs');
app.use( (ctx) => {
  // 指定服务端返回类型html
  ctx.response.type = 'html';
  ctx.body = fs.createReadStream('./template.html');
});
app.listen(3000);