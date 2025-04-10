import { IsString, MinLength, IsUrl } from 'class-validator';

export class CreateUniversityDto {
  @IsString()
  @MinLength(3, { message: 'Company title should be at least 3 chars' })
  companyTitle: string;

  @IsString()
  title: string;

  @IsUrl({}, { message: 'Link must be a valid URL' })
  link: string;

  @IsString()
  companyLogo: string;

  @IsString()
  certificate: string;

  @IsString()
  description: string;

  @IsString()
  startAt: string;

  @IsString()
  endAt: string;
}
