import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './log.interface';

@Injectable()
export class LogsService {
  constructor(@InjectModel('Log') private readonly logModel: Model<Log>) {}

  async findAll(): Promise<Log[]> {
    return this.logModel.find().exec();
  }
}
