import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Cancha {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @Column()
  ubicacion: string;

  @Column({ default: 'disponible' })
  estado: string;

  @OneToMany(() => Reserva, (reserva) => reserva.cancha)
  reservas: Reserva[];
}
