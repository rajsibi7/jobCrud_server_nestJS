import { Injectable } from '@nestjs/common';
import {JobInterface} from './interfaces/jobs.interface';
import {Model, Document} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'
import { from } from 'rxjs';


@Injectable()
export class JobsService {
 constructor(@InjectModel('jobTable') private readonly jobModel: Model<JobInterface>) { }

 async findAll(id: string):Promise<JobInterface> {
   //  console.log(JSON.stringify(this.jobModel.findOne()))
     return await this.jobModel.findOne();
  // return await this.jobModel.findOne();
 }
}
