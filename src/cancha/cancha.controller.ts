import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CanchaService } from './cancha.service';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';

@Controller('canchas')
export class CanchaController {
  constructor(private readonly canchaService: CanchaService) {}

  @Post()
  create(@Body() dto: CreateCanchaDto) {
    return this.canchaService.create(dto);
  }

  @Get()
  findAll() {
    return this.canchaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.canchaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCanchaDto) {
    return this.canchaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.canchaService.remove(id);
  }
}
