import { Schema } from 'mongoose';

export const LogSchema = new Schema({
  method: String,
  url: String,
  statusCode: Number,
  responseTime: Number,
  timestamp: { type: Date, default: Date.now },
});
