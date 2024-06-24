import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Character extends Document {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop()
  name: string;

  @Prop()
  status: string;

  @Prop()
  species: string;

  @Prop()
  type: string;

  @Prop()
  gender: string;

  @Prop({ type: Object })
  origin: {
    name: string;
    url: string;
  };

  @Prop({ type: Object })
  location: {
    name: string;
    url: string;
  };

  @Prop()
  image: string;

  @Prop([String])
  episode: string[];

  @Prop()
  url: string;

  @Prop()
  created: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
CharacterSchema.index({ id: 1 }, { unique: true });
