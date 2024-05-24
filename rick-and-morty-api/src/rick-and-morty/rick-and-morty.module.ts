import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RickAndMortyService } from './rick-and-morty.service';
import { RickAndMortyController } from './rick-and-morty.controller';
import { CharacterSchema } from './character.schema';
import { LogsModule } from '../logs/log.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Character', schema: CharacterSchema }]),
    LogsModule, // Importando LogsModule
    HttpModule,
  ],
  controllers: [RickAndMortyController],
  providers: [RickAndMortyService],
})
export class RickAndMortyModule {}
