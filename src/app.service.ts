import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { UpdateUsuarioDto } from './usuario/dto/update-usuario.dto';
import { CreateUsuarioDto } from './usuario/dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(nuevoUsuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find({ relations: ['reservas'] });
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: ['reservas'],
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    return usuario;
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const usuario = await this.findOne(id);
    const actualizado = Object.assign(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(actualizado);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
  }
}
