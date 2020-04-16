import * as mongoose from 'mongoose';

export interface JobInterface extends mongoose.Document {
    id? : string;
    title : string;
    description : string;    
}