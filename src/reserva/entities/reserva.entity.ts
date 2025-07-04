import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Cancha } from 'src/cancha/entities/cancha.entity';
import { Pago } from 'src/pago/entities/pago.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha_reserva: Date;

  @Column()
  hora_inicio: string;

  @Column()
  hora_fin: string;

  @Column({ default: 'pendiente' })
  estado: string; // pendiente, confirmada, cancelada

  @ManyToOne(() => Usuario, (usuario) => usuario.reservas)
  usuario: Usuario;

  @ManyToOne(() => Cancha, (cancha) => cancha.reservas)
  cancha: Cancha;

  @OneToOne(() => Pago, (pago) => pago.reserva)
  @JoinColumn()
  pago: Pago;
}
