const Koa = require('koa');
const app = new Koa();
app.use((ctx) => {
  if(ctx.request.accepts('xml')) {
    ctx.body = '<data>Hello World</data>';
  } else if (ctx.request.accepts('json')) {
    ctx.body = { data: 'Hello World' };
  } else if(ctx.request.accepts('html')) {
    ctx.body = '<p>Hello world</p>'
  } else {
    ctx.body = 'Hello World';
  }
});
app.listen(3000);

// 根据客户端想返回的数据，指定返回类型
// ctx.request.accepts 客户端想接受的类型