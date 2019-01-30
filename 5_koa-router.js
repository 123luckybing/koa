const Koa = require('koa');
const  app = new Koa();

const Router = require('koa-router');
const router = new Router();
// 定义/abc路由, 请求方式get,一定要对上   http://localhost:3000/abc  显示hello world
router.get('/abc', (ctx,next) => {
  console.log(ctx);
  console.log(next);
  ctx.body = 'hello world';
});

// 定义/test路由
router.get('/test', (ctx,next) => {
  console.log(ctx);
  console.log(next);
  ctx.body = 'test';
});

app.use(router.routes()); // 装载
app.use(router.allowedMethods()); // 允许get、post方法

app.listen(3000, () => { 
  console.log('server is running at 3000');
});