import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefono: string;

  @Column({ type: 'date' })
  fecha_registro: Date;

  @OneToMany(() => Reserva, (reserva) => reserva.usuario)
  reservas: Reserva[];
}
