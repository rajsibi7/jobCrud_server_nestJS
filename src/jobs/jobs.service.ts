import { Injectable } from '@nestjs/common';
import {JobInterface} from './interfaces/jobs.interface';
import {Model, Document} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'
import { from } from 'rxjs';
import { JopDTO } from './dto/job.dto';


@Injectable()
export class JobsService {
 constructor(@InjectModel('JobTable') private readonly jobModel: Model<JobInterface>) { }

 async findAll(): Promise<JobInterface[]> {
  return this.jobModel.find().exec();
}

async findone(id): Promise<JobInterface> {
  return this.jobModel.findOne({_id : id});
}

async create(createCatDto: JopDTO): Promise<JobInterface> {
  const createdCat = new this.jobModel(createCatDto).save();
  return await createdCat;
}

async Update(id: string, createCatDto: JopDTO): Promise<JobInterface> {
  return await this.jobModel.findByIdAndUpdate(id,createCatDto, {new : true})
 }

 async delete(id: string):Promise<any> {
  return await this.jobModel.findByIdAndDelete(id);
 }

}
