import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { Cancha } from './cancha/entities/cancha.entity';
import { Reserva } from './reserva/entities/reserva.entity';
import { Pago } from './pago/entities/pago.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3006'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Usuario, Cancha, Reserva, Pago],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
