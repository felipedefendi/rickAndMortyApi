import { Module } from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptor';
import { ResponseTimeInterceptor } from './response-time.interceptor';
import { LogsModule } from '../logs/log.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from '../logs/log.schema';

@Module({
  imports: [
    LogsModule,
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
  ],
  providers: [LoggingInterceptor, ResponseTimeInterceptor],
  exports: [LoggingInterceptor, ResponseTimeInterceptor],
})
export class CommonModule {}
