import { Controller, Get, Post, Delete, Put, Param, Body, Headers, HttpCode, Res } from '@nestjs/common';
import { JobsService } from './jobs.service';
import {JopDTO} from './dto/job.dto'
import { from } from 'rxjs';
import { JobInterface } from './interfaces/jobs.interface';
import * as mongoose from 'mongoose';

@Controller('jobs')
export class JobsController {

    header = { 'Access-Control-Allow-Origin': '*'};
    constructor(private readonly jobsService : JobsService){

    }

    @Post()
     create(@Body() createCatDto: JopDTO) {
      return this.jobsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<JobInterface[]> {
      return this.jobsService.findAll();
    }

    @Get(':id')
    async findone(@Param('id') id: string): Promise<JobInterface> {
      return this.jobsService.findone(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() createCatDto: JopDTO) {
        return this.jobsService.Update(id,createCatDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) : any {
        return this.jobsService.delete(id)
    }
}
