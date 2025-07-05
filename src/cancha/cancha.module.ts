import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cancha } from './entities/cancha.entity';
import { CanchaService } from './cancha.service';
import { CanchaController } from './cancha.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cancha])],
  controllers: [CanchaController],
  providers: [CanchaService],
})
export class CanchaModule {}
