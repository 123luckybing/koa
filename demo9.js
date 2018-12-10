const Koa = require('koa');
const app = new Koa();
const main = (ctx) => {
  ctx.throw(500);
}
app.use(main);
app.listen(3000,() => {
  console.log('server is running at 3000');
});
// 500