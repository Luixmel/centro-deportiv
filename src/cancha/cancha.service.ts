import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cancha } from './entities/cancha.entity';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';

@Injectable()
export class CanchaService {
  constructor(
    @InjectRepository(Cancha)
    private readonly canchaRepository: Repository<Cancha>,
  ) {}

  create(dto: CreateCanchaDto): Promise<Cancha> {
    const cancha = this.canchaRepository.create(dto);
    return this.canchaRepository.save(cancha);
  }

  findAll(): Promise<Cancha[]> {
    return this.canchaRepository.find({ relations: ['reservas'] });
  }

  async findOne(id: number): Promise<Cancha> {
    const cancha = await this.canchaRepository.findOne({
      where: { id },
      relations: ['reservas'],
    });
    if (!cancha)
      throw new NotFoundException(`Cancha con id ${id} no encontrada`);
    return cancha;
  }

  async update(id: number, dto: UpdateCanchaDto): Promise<Cancha> {
    const cancha = await this.findOne(id);
    Object.assign(cancha, dto);
    return this.canchaRepository.save(cancha);
  }

  async remove(id: number): Promise<void> {
    const cancha = await this.findOne(id);
    await this.canchaRepository.remove(cancha);
  }
}
