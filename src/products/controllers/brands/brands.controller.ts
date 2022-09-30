import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Patch, HttpCode } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/products/dto/brand.dto';
import { BrandsService } from 'src/products/services/brands/brands.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'List of brands' })
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one brand by Id' })
  get(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new brand' })
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update an individual brand' })
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateBrandDto) {
    return this.brandsService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete an individual brand' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.remove(+id);
  }
}
