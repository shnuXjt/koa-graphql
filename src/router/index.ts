import {saveInfo, fetchInfo} from '../controllers/info' // 引入info controller
import {saveStudent, fetchStudent, fetchStudentDetail} from '../controllers/student' // 引入 student controller



import * as Router from 'koa-router';

export const router = new Router();

router.get('/test', async(ctx: any) => {
    ctx.body = 'hello world';
})

// 设置每一个路由对应的相对的控制器
router.post('/saveinfo', saveInfo)
router.get('/info', fetchInfo)
router.post('/savestudent', saveStudent)
router.get('/student', fetchStudent)
router.get('/studentDetail', fetchStudentDetail);