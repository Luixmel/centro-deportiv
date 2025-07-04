import { IsString, IsOptional } from 'class-validator';

export class CreateCanchaDto {
  @IsString()
  nombre: string;

  @IsString()
  tipo: string;

  @IsString()
  ubicacion: string;

  @IsString()
  @IsOptional()
  estado?: string; // por defecto será "disponible"
}
