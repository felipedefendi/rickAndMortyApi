import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false }) // Desabilitar a geração automática de ObjectId
export class Character extends Document {
  @Prop({ required: true })
  id: number; // Use 'id' em vez de '_id' para IDs numéricos

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
