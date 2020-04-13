import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import {JopDTO} from './dto/job.dto'
import { from } from 'rxjs';
import { JobInterface } from './interfaces/jobs.interface';
import * as mongoose from 'mongoose';

@Controller('jobs')
export class JobsController {

    constructor(private readonly jobsService : JobsService){
        console.log(mongoose.connection.readyState);
    }

    @Get(':id')
    findAllRecord(@Param('id') id ) : Promise<JobInterface> {
        console.log('--> mongoose.connection',mongoose.connection.readyState);
         return this.jobsService.findAll(id)
    }

    @Post()
    createRecord() : string {
        return 'createRecord works';
    }

    @Put(':id')
    updateRecord() : string {
        return 'updateRecord works';
    }

    @Delete(':id')
    deleteRecord() : string {
        return 'deleteRecord works';
    }
}
