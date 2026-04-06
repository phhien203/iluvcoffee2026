import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiForbiddenResponse } from '@nestjs/swagger';

import { Public } from 'src/common/decorators/public.decorator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { coffeeModel as CoffeeModel } from 'src/generated/prisma/models/coffee';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {
    console.log('CoffeeController instantiated');
  }

  @ApiForbiddenResponse({ description: 'Required api key header.' })
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(
      `is createCoffeeDto instance of CreateCoffeeDto?: ${createCoffeeDto instanceof CreateCoffeeDto}`,
    );
    return this.coffeesService.create(createCoffeeDto);
  }

  @Public()
  @Get()
  async findAll(
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<CoffeeModel[]> {
    return this.coffeesService.findAll(paginationQuery);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(`id is a ${typeof id}`);
    return this.coffeesService.findOne(+id);
  }

  @ApiForbiddenResponse({ description: 'Required api key header.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(+id, updateCoffeeDto);
  }

  @ApiForbiddenResponse({ description: 'Required api key header.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(+id);
  }
}
