import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { JobSchema} from './schemas/jobs.scehams';
import { from } from 'rxjs';

@Module({
  imports: [MongooseModule.forFeature([{name: 'JobTable', schema: JobSchema}])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
