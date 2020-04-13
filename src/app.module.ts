import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {JobsModule} from './jobs/jobs.module';
import {MongooseModule} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { from } from 'rxjs';

@Module({
  //mongodb://localhost:27017/jobDB
  //mongodb://localhost/jobDB
  //mongodb:127.0.0.1/jobDB
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/jobDB'), JobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor(){
  }
}
