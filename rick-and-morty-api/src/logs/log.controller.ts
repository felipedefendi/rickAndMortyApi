import { Controller, Get } from '@nestjs/common';
import { LogsService } from './log.service';
import { Log } from './log.interface';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get()
  async findAll(): Promise<Log[]> {
    return this.logsService.findAll();
  }
}
