const Koa = require('koa')
const KoaStatic = require('koa-static')
const app = new Koa()
const path = require('path')

app.use(KoaStatic('static/', {}))

console.log('open http://localhost:9090')
app.listen(9090)
