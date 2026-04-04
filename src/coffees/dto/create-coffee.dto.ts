import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  title: string = '';

  @IsString()
  brand: string = '';

  @IsString({ each: true })
  flavors: string[] = [];
}
