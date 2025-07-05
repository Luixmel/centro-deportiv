import { IsString } from 'class-validator';

export class CreateCanchaDto {
  @IsString()
  nombre: string;

  @IsString()
  tipo: string;

  @IsString()
  ubicacion: string;

  @IsString()
  estado: string;
}
