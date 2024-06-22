import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { LogsService } from '../logs/log.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from '../logs/log.schema';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(
    private readonly logsService: LogsService,
    @InjectModel(Log.name) private logModel: Model<Log>,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        const responseTime = Date.now() - now;
        console.log(`Response time: ${responseTime}ms`);

        const log = new this.logModel({
          message: `Response time: ${responseTime}ms`,
          timestamp: new Date(),
        });

        this.logsService.create(log);
      }),
      catchError((error) => {
        const log = new this.logModel({
          message: `Error: ${error.message}`,
          timestamp: new Date(),
        });

        this.logsService.create(log);
        throw error;
      }),
    );
  }
}
