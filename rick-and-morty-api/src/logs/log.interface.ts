import { Document } from 'mongoose';

export interface Log extends Document {
  method: string;
  url: string;
  statusCode: number;
  responseTime: number;
  timestamp: Date;
}
