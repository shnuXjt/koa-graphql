import * as Router from 'koa-router';
import { InfoController } from '../controllers/info';
import { StudentContoller } from '../controllers/student';
import { Context } from 'koa';

const router = new Router();
const infoController = new InfoController();
const studentController = new StudentContoller();

router.post('/saveinfo', infoController.saveInfo);
router.post('/savestudent', studentController.saveStudent);
router.get('/info', infoController.fetchInfos);
router.get('/student', studentController.getStudent);
router.get('/studentDetail', studentController.getStudentDetail);
router.get("/test", (ctx: Context, next: any) => {
        ctx.body = 'hello koa';
    });
export = router;