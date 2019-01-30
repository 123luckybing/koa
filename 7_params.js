const Koa = require('koa');
const  app = new Koa();

const Router = require('koa-router');
const router = new Router();

router.get('/test',(ctx,next) => {
  ctx.body = ctx.query;
});

// http://localhost:3000/test?name=zz&age=24

app.use(router.routes()); // 装载
app.use(router.allowedMethods()); // 允许get、post方法

app.listen(3000, () => { 
  console.log('server is running at 3000');
});