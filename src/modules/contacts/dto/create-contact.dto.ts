import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly password: string;

  @IsDateString()
  readonly birthDate: Date;

  @IsEmail()
  readonly email?: string;
}
