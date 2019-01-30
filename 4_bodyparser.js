const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
app.use(bodyparser()); 
// 使用bodyparser的中间件
app.use(async (ctx) => {
  const data = ctx.request.body;
  ctx.body = data;
});

app.listen(3000,() => {
  console.log('server is running at 3000');
});