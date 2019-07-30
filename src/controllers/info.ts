import * as mongoose from 'mongoose';
import { Context } from 'koa';
import { NextFunction } from 'express';

const Info = mongoose.model('Info');

export class InfoController {

    async saveInfo(ctx: Context, next: NextFunction) {
        const opts = ctx.request.body;
        const info = new Info(opts);
        const saveInfo = await info.save();
        console.log(saveInfo);
        if(saveInfo) {
            ctx.body = {
                success: true,
                info: saveInfo
            }
        } else {
            ctx.body = {
                success: false
            }
        }

    }

    async fetchInfos(ctx: Context, next: NextFunction) {
        const infos = await Info.find({});
        if(infos.length) {
            ctx.body = {
                success: true,
                info: infos
            }
        } else {
            ctx.body = {
                success: false
            }
        }
    }
}