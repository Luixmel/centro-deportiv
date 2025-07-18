import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pago } from './entities/pago.entity';
import { PagoService } from './pago.service';
import { PagoController } from './pago.controller';
import { Reserva } from 'src/reserva/entities/reserva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pago, Reserva])],
  controllers: [PagoController],
  providers: [PagoService],
})
export class PagoModule {}
