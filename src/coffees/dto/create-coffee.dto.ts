import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of the coffee.' })
  @IsString()
  title: string = '';

  @ApiProperty({ description: 'The brand of the coffee.' })
  @IsString()
  brand: string = '';

  @ApiProperty({ example: ['chocolate', 'vanilla', 'strawberry'] })
  @IsString({ each: true })
  flavors: string[] = [];
}
