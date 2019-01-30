const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  if(ctx.url === '/zz'){
    ctx.cookies.set(
      'name','zhoufangbing',{
        domain: 'localhost',
        path:'/zz',
        maxAge: 24*60*60*1000,
        overwrite: false,
        expires: new Date('2019-12-30'),
        httpOnly: false,
      }
    );
    ctx.body = 'set cookie success'
  } else {
    ctx.body = 'no cookie';
    
  }
});

app.listen(3000, ()=>{
  console.log('server is running at 3000');
});