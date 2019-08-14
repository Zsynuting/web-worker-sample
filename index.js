const Koa = require('koa');
const KoaStatic = require('koa-static')
const app = new Koa();
const path = require("path")

app.use(KoaStatic(path.posix.join(__dirname, 'static')))

app.listen(9090)