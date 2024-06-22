import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Log } from './log.interface';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(@InjectModel('Log') private readonly logModel: Model<Log>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    return next
      .handle()
      .pipe(
        tap(() => {
          const response = context.switchToHttp().getResponse();
          const statusCode = response.statusCode;
          const responseTime = Date.now() - now;

          const log = new this.logModel({
            method,
            url,
            statusCode,
            responseTime,
          });

          log.save();
        }),
      );
  }
}
