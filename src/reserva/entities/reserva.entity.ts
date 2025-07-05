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

  @Column({ type: 'timestamp' })
  fecha_reserva: Date;

  @Column()
  duracion_horas: number;

  @Column({ type: 'time', default: '00:00:00' })
  hora_inicio: string;

  @Column({ type: 'time', default: '01:00:00' })
  hora_fin: string;

  @Column({ default: 'pendiente' })
  estado: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.reservas, { eager: true })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToOne(() => Cancha, (cancha) => cancha.reservas, { eager: true })
  @JoinColumn({ name: 'cancha_id' })
  cancha: Cancha;

  @OneToOne(() => Pago, (pago) => pago.reserva, { cascade: true, nullable: true })
  @JoinColumn({ name: 'pago_id' })
  pago: Pago;
}
