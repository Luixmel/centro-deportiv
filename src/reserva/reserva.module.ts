import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Cancha } from 'src/cancha/entities/cancha.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva, Usuario, Cancha])],
  controllers: [ReservaController],
  providers: [ReservaService],
})
export class ReservaModule {}
