import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character } from './character.interface';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RickAndMortyService {
  constructor(
    private httpService: HttpService,
    @InjectModel('Character') private characterModel: Model<Character>,
  ) {}

  async fetchAndSaveCharacter(id: number): Promise<Character> {
    const response = await lastValueFrom(
      this.httpService.get(`https://rickandmortyapi.com/api/character/${id}`)
    );
    const characterData = response.data;

    const createdCharacter = new this.characterModel(characterData);
    return createdCharacter.save();
  }

  async findAll(): Promise<Character[]> {
    return this.characterModel.find().exec();
  }
}
