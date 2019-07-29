import * as mongoose from 'mongoose'
import { Request } from 'express';
import { Context } from 'koa';
const Info = mongoose.model('Info')
// 保存info信息
export const saveInfo = async (ctx: Context, next: any) => {
    // 获取请求的数据
    const opts = ctx.request.body
    const info = new Info(opts)
    const saveInfo = await info.save() // 保存数据
    console.log(saveInfo)
    // 简单判断一下 是否保存成功，然后返回给前端
    if (saveInfo) {
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
// 获取所有的info数据
export const fetchInfo = async (ctx: Context, next: any) => {
    const infos = await Info.find({}) // 数据查询
    if (infos.length) {
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