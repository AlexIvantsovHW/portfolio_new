import {
  Controller,
  Get,
  /* Post,
  Body,
  Patch,
  Param,
  Delete, */
} from '@nestjs/common';
import { UniversityService } from './university.service';
//import { CreateUniversityDto } from './dto/create-university.dto';
//import { UniversitiesType } from './model/type';
import { UniversityEntity } from './entities/university.entity';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  /*   @Post()
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universityService.create(createUniversityDto);
  } */

  @Get()
  findAll(): Promise<UniversityEntity[]> {
    return this.universityService.findAll();
  }
  /* 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUniversityDto: UniversitiesType,
  ) {
    return this.universityService.update(+id, updateUniversityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universityService.remove(+id);
  } */
}
