import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { RickAndMortyService } from './rick-and-morty.service';
import { CreateCharacterDto } from './create-character.dto';
import { UpdateCharacterDto } from './update-character.dto';

@Controller('rick-and-morty')
export class RickAndMortyController {
  constructor(private readonly rickAndMortyService: RickAndMortyService) {}

  @Get('character/:id')
  getCharacter(@Param('id') id: number) {
    return this.rickAndMortyService.fetchCharacter(id);
  }

  @Post('character')
  createCharacter(@Body() createCharacterDto: CreateCharacterDto) {
    return this.rickAndMortyService.create(createCharacterDto);
  }

  @Put('character/:id')
  updateCharacter(@Param('id') id: number, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.rickAndMortyService.update(id, updateCharacterDto);
  }

  @Delete('character/:id')
  deleteCharacter(@Param('id') id: number) {
    return this.rickAndMortyService.delete(id);
  }
}
