import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Log extends Document {
  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  timestamp: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);
