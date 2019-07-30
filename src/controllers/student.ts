import * as mongoose from 'mongoose';
import { Context } from 'koa';
import { NextFunction } from 'express';

const Student = mongoose.model('Student');

export class StudentContoller {
    async saveStudent(ctx: Context, next: NextFunction) {
        const opts = ctx.request.body;
        const student = new Student(opts);
        const savestudent = await student.save();
        if (savestudent) {
            ctx.body = {
                success: true,
                student: savestudent
            }
        } else {
            ctx.body = {
                success: false
            }
        }
    }

    async getStudent(ctx: Context, next: NextFunction) {
        const students = await Student.find({});
        if (students.length) {
            ctx.body = {
                success: true,
                students: students
            }
        } else {
            ctx.body = {
                success: false
            }
        }
    }

    async getStudentDetail(ctx: Context, next: NextFunction) {
    
        const students = await Student.find({}).populate({
            path: 'info',
            select: 'hobby height weight'
        }).exec();
        if (students.length) {
            ctx.body = {
                success: true,
                students: students
            }
        } else {
            ctx.body = {
                success: false
            }
        }
    }
}