const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const main = (ctx) => {
  ctx.body = 'Hello world';
}

const redirect = (ctx) => {
  ctx.response.redirect = '/';
  ctx.body = '<a href="/">Index page</a>'
}

app.use(route.get('/',main));
app.use(route.get('/redirect',redirect));

app.listen(3000, () => {
  console.log('demo8 is running at 3000');
});