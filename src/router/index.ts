import * as Router from 'koa-router';
import { InfoController } from '../controllers/info';
import { StudentContoller } from '../controllers/student';
import { Context } from 'koa';

const router = new Router();
const infoController = new InfoController();
const studentController = new StudentContoller();

router.post('/saveinfo', infoController.saveInfo)
      .post('/savestudent', studentController.saveStudent)
      .get('/info', infoController.fetchInfos)
      .get('/student', studentController.getStudent)
      .get('/studentDetail', studentController.getStudentDetail)
      .get("/test", (ctx: Context, next: any) => {
        ctx.body = 'hello koa';
    });
export = router;