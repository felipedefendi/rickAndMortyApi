import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { CharacterSchema } from './character.schema';
import { RickAndMortyService } from './rick-and-morty.service';
import { RickAndMortyController } from './rick-and-morty.controller';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Character', schema: CharacterSchema }]),
  ],
  providers: [RickAndMortyService],
  controllers: [RickAndMortyController],
})
export class RickAndMortyModule {}
