import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Reserva } from 'src/reserva/entities/reserva.entity';

@Entity()
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  monto: number;

  @Column({ type: 'date' })
  fecha_pago: Date;

  @Column()
  metodo_pago: string; // efectivo, tarjeta, etc.

  @OneToOne(() => Reserva, (reserva) => reserva.pago)
  @JoinColumn()
  reserva: Reserva;
}
