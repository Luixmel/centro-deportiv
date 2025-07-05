import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from './entities/pago.entity';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Reserva } from 'src/reserva/entities/reserva.entity';

@Injectable()
export class PagoService {
  constructor(
    @InjectRepository(Pago)
    private readonly pagoRepository: Repository<Pago>,
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
  ) {}

  async create(dto: CreatePagoDto): Promise<Pago> {
    const reserva = await this.reservaRepository.findOne({
      where: { id: dto.reservaId },
    });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');

    const nuevoPago = this.pagoRepository.create({
      monto: dto.monto,
      fecha_pago: dto.fecha_pago,
      metodo_pago: dto.metodo_pago,
      reserva,
    });

    return this.pagoRepository.save(nuevoPago);
  }

  findAll(): Promise<Pago[]> {
    return this.pagoRepository.find({ relations: ['reserva'] });
  }

  async findOne(id: number): Promise<Pago> {
    const pago = await this.pagoRepository.findOne({
      where: { id },
      relations: ['reserva'],
    });
    if (!pago) throw new NotFoundException(`Pago con id ${id} no encontrado`);
    return pago;
  }

  async update(id: number, dto: UpdatePagoDto): Promise<Pago> {
    const pago = await this.findOne(id);

    if (dto.reservaId) {
      const reserva = await this.reservaRepository.findOne({
        where: { id: dto.reservaId },
      });
      if (!reserva) throw new NotFoundException('Reserva no encontrada');
      pago.reserva = reserva;
    }

    Object.assign(pago, dto);
    return this.pagoRepository.save(pago);
  }

  async remove(id: number): Promise<void> {
    const pago = await this.findOne(id);
    await this.pagoRepository.remove(pago);
  }
}
