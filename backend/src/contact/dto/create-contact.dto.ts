import { IsEmail, IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class CreateContactDto {
  @IsNumber()
  @IsNotEmpty()
  whatsApp: number;

  @IsNumber()
  @IsNotEmpty()
  telegram: number;

  @IsUrl()
  @IsNotEmpty()
  @IsNotEmpty()
  linkedIn: string;

  @IsNumber()
  @IsNotEmpty()
  phone: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsUrl()
  @IsNotEmpty()
  cv: string;

  @IsUrl()
  @IsNotEmpty()
  website: string;
}
