import { IsDateString, IsString, IsInt } from 'class-validator';

export class CreateReservaDto {
  @IsDateString()
  fecha_reserva: string;

  @IsString()
  hora_inicio: string;

  @IsString()
  hora_fin: string;

  @IsString()
  estado: string; // pendiente, confirmada, cancelada

  @IsInt()
  usuarioId: number;

  @IsInt()
  canchaId: number;
}
