import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RickAndMortyService } from './rick-and-morty.service';
import { RickAndMortyController } from './rick-and-morty.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './character.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }]),
  ],
  providers: [RickAndMortyService],
  controllers: [RickAndMortyController],
})
export class RickAndMortyModule {}
