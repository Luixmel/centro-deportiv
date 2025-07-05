import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './entities/reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Cancha } from 'src/cancha/entities/cancha.entity';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Cancha)
    private readonly canchaRepository: Repository<Cancha>,
  ) {}

  async create(dto: CreateReservaDto): Promise<Reserva> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id: dto.usuarioId },
    });
    const cancha = await this.canchaRepository.findOne({
      where: { id: dto.canchaId },
    });

    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    if (!cancha) throw new NotFoundException('Cancha no encontrada');

    const reserva = this.reservaRepository.create({
      fecha_reserva: dto.fecha_reserva,
      hora_inicio: dto.hora_inicio,
      hora_fin: dto.hora_fin,
      estado: dto.estado,
      usuario,
      cancha,
    });

    return this.reservaRepository.save(reserva);
  }

  findAll(): Promise<Reserva[]> {
    return this.reservaRepository.find({
      relations: ['usuario', 'cancha', 'pago'],
    });
  }

  async findOne(id: number): Promise<Reserva> {
    const reserva = await this.reservaRepository.findOne({
      where: { id },
      relations: ['usuario', 'cancha', 'pago'],
    });
    if (!reserva)
      throw new NotFoundException(`Reserva con id ${id} no encontrada`);
    return reserva;
  }

  async update(id: number, dto: UpdateReservaDto): Promise<Reserva> {
    const reserva = await this.findOne(id);

    if (dto.usuarioId) {
      const usuario = await this.usuarioRepository.findOne({
        where: { id: dto.usuarioId },
      });
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      reserva.usuario = usuario;
    }

    if (dto.canchaId) {
      const cancha = await this.canchaRepository.findOne({
        where: { id: dto.canchaId },
      });
      if (!cancha) throw new NotFoundException('Cancha no encontrada');
      reserva.cancha = cancha;
    }

    Object.assign(reserva, dto);
    return this.reservaRepository.save(reserva);
  }

  async remove(id: number): Promise<void> {
    const reserva = await this.findOne(id);
    await this.reservaRepository.remove(reserva);
  }
}
