import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() dto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioService.create(dto);
  }

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() dto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    return this.usuarioService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usuarioService.remove(id);
  }
}
