const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
  let url = ctx.url;
  let query = ctx.query; // 对象
  let queryString = ctx.querystring // 字符串
  ctx.body = { 
    url,
    query,
    queryString
   };
});

app.listen(3000, () => {
  console.log('service is running at 3000');
});