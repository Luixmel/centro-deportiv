import { IsString, IsEmail, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;

  @IsDateString()
  fecha_registro: string; // formato: YYYY-MM-DD
}
