import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Character } from './character.schema';
import { CreateCharacterDto } from './create-character.dto';
import { UpdateCharacterDto } from './update-character.dto';

@Injectable()
export class RickAndMortyService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Character.name) private characterModel: Model<Character>,
  ) {}

  fetchCharacter(id: number) {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return this.httpService.get(url).pipe(
      map((response: any) => response.data)
    );
  }

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const createdCharacter = new this.characterModel(createCharacterDto);
    return createdCharacter.save();
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto): Promise<Character> {
    return this.characterModel.findOneAndUpdate({ id }, updateCharacterDto, { new: true });
  }

  async delete(id: number): Promise<Character> {
    return this.characterModel.findOneAndDelete({ id });
  }
}
