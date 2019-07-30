"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info_1 = require("../controllers/info"); // 引入info controller
const student_1 = require("../controllers/student"); // 引入 student controller
const Router = require("koa-router");
exports.router = new Router();
exports.router.get('/test', async (ctx) => {
    ctx.body = 'hello world';
});
// 设置每一个路由对应的相对的控制器
exports.router.post('/saveinfo', info_1.saveInfo);
exports.router.get('/info', info_1.fetchInfo);
exports.router.post('/savestudent', student_1.saveStudent);
exports.router.get('/student', student_1.fetchStudent);
exports.router.get('/studentDetail', student_1.fetchStudentDetail);
//# sourceMappingURL=index.js.map