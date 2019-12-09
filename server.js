const Koa = require('koa');
const next = require('next');

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = app.getRequestHandler();

const port = 3000;

app.prepare().then(() => {
  const serve = new Koa();
  serve.use(async (ctx, next) => {
    await handler(ctx.req, ctx.res);
    ctx.respond = false;
  })

  serve.listen(port, () => {
    console.log('server listening on ' + port);
  })
})
