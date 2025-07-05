import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; // 👈 FALTA ESTO

import { Usuario } from './usuario/entities/usuario.entity';
import { Cancha } from './cancha/entities/cancha.entity';
import { Reserva } from './reserva/entities/reserva.entity';
import { Pago } from './pago/entities/pago.entity';

import { UsuarioModule } from './usuario/usuario.module';
import { CanchaModule } from './cancha/cancha.module';
import { ReservaModule } from './reserva/reserva.module';
import { PagoModule } from './pago/pago.module';
@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Usuario, Cancha, Reserva, Pago],
      synchronize: true,
    }),

    // 👇 Aquí activas los módulos funcionales:
    UsuarioModule,
    CanchaModule,
    ReservaModule,
    PagoModule,
  ],
})
export class AppModule {}
