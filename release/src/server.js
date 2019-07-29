"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const KoaStatic = require("koa-static");
const mongodb_1 = require("./mongodb"); // 引入mongodb
const info_1 = require("./controllers/info"); // 引入info controller
const student_1 = require("./controllers/student"); // 引入 student controller
mongodb_1.database();
const app = new Koa();
const router = new Router();
const PORT = 4000;
app.use(bodyparser());
app.use(KoaStatic(__dirname + '/public'));
router.get('/test', async (ctx) => {
    ctx.body = 'hello world';
});
// 设置每一个路由对应的相对的控制器
router.post('/saveinfo', info_1.saveInfo);
router.get('/info', info_1.fetchInfo);
router.post('/savestudent', student_1.saveStudent);
router.get('/student', student_1.fetchStudent);
router.get('/studentDetail', student_1.fetchStudentDetail);
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(PORT);
console.log('server running on port ', PORT);
//# sourceMappingURL=server.js.map