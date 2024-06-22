import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsService } from './log.service';
import { Log, LogSchema } from './log.schema';
import { LogsController } from './log.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
  providers: [LogsService],
  controllers: [LogsController],
  exports: [LogsService], 
})
export class LogsModule {}
