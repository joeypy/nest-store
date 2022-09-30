import { Controller, Get, Param, Post, Body, Patch, Delete, ParseIntPipe, HttpCode } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/products/dto/category.dto';
import { CategoriesService } from 'src/products/services/categories/categories.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'List of categories' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one category by Id' })
  get(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new category' })
  create(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update an individual category' })
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategoryDto) {
    return this.categoriesService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete an individual category' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(+id);
  }
}
