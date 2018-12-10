const Koa = require('koa');
const app = new Koa();
app.use( (ctx) => {
  if( ctx.request.path === '/') {
    ctx.response.type = 'html';
    ctx.body = '<a href = "/child">Index Page</a> '
  } else {
    ctx.body = 'Hello World';
  }
});
app.listen(3000);

// ctx.request.path 原生路由