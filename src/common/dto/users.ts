import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;

  @IsNotEmpty()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

// If you want to omit a field, you can use this
// export class UpdateProductDto extends PartialType(
//   OmitType(CreateProductDTO, ['name']),
// ) {}
