import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TachesService } from './taches.service';
import { CreateTacheDto } from './dto/tache.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('taches') // Tag for grouping related endpoints
@Controller('taches')
export class TachesController {
  constructor(private readonly tachesService: TachesService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all tasks' }) // Description for the endpoint
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all tasks.',
  })
  async findAll() {
    return this.tachesService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({ type: CreateTacheDto })
  @ApiResponse({
    status: 201,
    description: 'Task created successfully.',
    type: CreateTacheDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createTacheDto: CreateTacheDto) {
    return this.tachesService.create(createTacheDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a task by ID' })
  @ApiResponse({ status: 200, description: 'Task updated successfully.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  async update(
    @Param('id') id: string,
    @Body() updateTacheDto: CreateTacheDto,
  ) {
    return this.tachesService.update(id, updateTacheDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by ID' })
  @ApiResponse({ status: 200, description: 'Task deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  async delete(@Param('id') id: string) {
    return this.tachesService.delete(id);
  }
}
