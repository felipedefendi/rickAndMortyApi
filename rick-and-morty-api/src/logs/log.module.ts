import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from './log.schema';
import { LoggingInterceptor } from './log.interceptor';
import { LogsService } from './log.service';
import { LogsController } from './log.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Log', schema: LogSchema }])],
  providers: [LoggingInterceptor, LogsService],
  controllers: [LogsController],
  exports: [LoggingInterceptor, MongooseModule],
})
export class LogsModule {}
