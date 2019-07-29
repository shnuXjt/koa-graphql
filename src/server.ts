import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyparser from 'koa-bodyparser';
import * as KoaStatic from 'koa-static';

import {database} from './mongodb' // 引入mongodb
import {saveInfo, fetchInfo} from './controllers/info' // 引入info controller
import {saveStudent, fetchStudent, fetchStudentDetail} from './controllers/student' // 引入 student controller

database();
const app = new Koa();
const router = new Router();
const PORT = 4000;

app.use(bodyparser());
app.use(KoaStatic(__dirname + '/public'))

router.get('/test', async(ctx: any) => {
    ctx.body = 'hello world';
})

// 设置每一个路由对应的相对的控制器
router.post('/saveinfo', saveInfo)
router.get('/info', fetchInfo)
router.post('/savestudent', saveStudent)
router.get('/student', fetchStudent)
router.get('/studentDetail', fetchStudentDetail)

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT);
console.log('server running on port ', PORT);