const Koa = require('koa');
const app = new Koa();

const views = require('koa-views');
const path = require('path');

app.use(views(path.join(__dirname,'./views'),{
  extension: 'ejs'
}));

// http://localhost:3000/
app.use(async (ctx) => {
  let title = 'hello zhouzhou';
  await ctx.render('index',{
    title
  });
});

app.listen(3000, () => {
  console.log('server is running at 3000');
});