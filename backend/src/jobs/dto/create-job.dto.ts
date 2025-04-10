import { IsDateString, IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateJobDto {
  readonly id: number;
  @IsString({ message: 'Job title is always string!' })
  @Length(3, 30, {
    message: 'Job title should be at least 3 chars and no more than 30 chars',
  })
  readonly jobTitle: string;

  @IsDateString({}, { message: 'End date should be in Date format ' })
  readonly startAt: string;

  @IsDateString({}, { message: 'End date should be in Date format ' })
  readonly endAt: string;

  @IsString({ message: 'Company title is always string!' })
  @Length(3, 30, {
    message: 'company title should be at least 3 chars and more than 30 chars',
  })
  readonly companyTitle: string;

  @IsString({ message: 'Description is always string!' })
  readonly description: string;

  @IsNumber({}, { message: 'Software ID must be a number!' })
  @Min(1)
  readonly software_id: number;
}
/*   companyTitle: string;
  start: string;
  end: string;
  description: string;
  jobTitle: string;
  software: {
    db: softwareElementType[];
    API: softwareElementType[];
    fronentd: softwareElementType[];
    backend: softwareElementType[];
    UI: softwareElementType[];
    others: softwareElementType[];
  }; */
