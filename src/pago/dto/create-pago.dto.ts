import { IsNumber, IsDateString, IsString, IsInt } from 'class-validator';

export class CreatePagoDto {
  @IsNumber()
  monto: number;

  @IsDateString()
  fecha_pago: string;

  @IsString()
  metodo_pago: string;

  @IsInt()
  reservaId: number;
}
