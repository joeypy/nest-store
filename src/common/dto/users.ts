import { IsNotEmpty, IsString, IsPhoneNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

// If you want to omit a field, you can use this
// export class UpdateProductDto extends PartialType(
//   OmitType(CreateProductDTO, ['name']),
// ) {}
