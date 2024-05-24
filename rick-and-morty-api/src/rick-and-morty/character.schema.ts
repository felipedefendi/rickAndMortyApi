import { Schema } from 'mongoose';

export const CharacterSchema = new Schema({
  id: Number,
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    name: String,
    url: String,
  },
  location: {
    name: String,
    url: String,}
})
