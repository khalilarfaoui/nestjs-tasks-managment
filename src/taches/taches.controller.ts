import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TachesService } from './taches.service';
import { CreateTacheDto } from './dto/tache.dto';

@Controller('taches')
export class TachesController {
  constructor(private readonly tachesService: TachesService) {}

  @Get()
  async findAll() {
    return this.tachesService.findAll();
  }

  @Post()
  async create(@Body() createTacheDto: CreateTacheDto) {
    return this.tachesService.create(createTacheDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTacheDto: CreateTacheDto) {
    return this.tachesService.update(id, updateTacheDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tachesService.delete(id);
  }
}
