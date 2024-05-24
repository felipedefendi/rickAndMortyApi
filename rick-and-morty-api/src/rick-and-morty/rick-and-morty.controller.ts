import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RickAndMortyService } from './rick-and-morty.service';
import { JwtAuthGuard } from '../jwt-auth/jwt-auth.guard';
import { Character } from './character.interface';

@Controller('rick-and-morty')
export class RickAndMortyController {
  constructor(private readonly rickAndMortyService: RickAndMortyService) {}

  @UseGuards(JwtAuthGuard)
  @Post('character/:id')
  async fetchAndSaveCharacter(@Param('id') id: number): Promise<Character> {
    return this.rickAndMortyService.fetchAndSaveCharacter(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('characters')
  async findAll(): Promise<Character[]> {
    return this.rickAndMortyService.findAll();
  }
}
