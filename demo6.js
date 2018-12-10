const Koa = require('koa');
// npm install
const route = require('koa-route');
const app = new Koa();
const name = (ctx) => {
  ctx.body = '<a href="/age">周冰冰～</a>'
}
const main = (ctx) => {
  ctx.body = '<a href="/name">See name</a>';
}
const age = (ctx) => {
  ctx.body = '<a href="/">21</a>'
}
app.use(route.get('/',main));
app.use(route.get('/name',name));
app.use(route.get('/age',age));
app.listen(3000);