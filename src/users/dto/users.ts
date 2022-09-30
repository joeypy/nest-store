import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

// If you want to omit a field, you can use this
// export class UpdateProductDto extends PartialType(
//   OmitType(CreateProductDTO, ['name']),
// ) {}
