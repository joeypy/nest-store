import { Body, Controller, Delete, Get, Param, Post, HttpStatus, HttpCode, Patch, ParseIntPipe } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/products/dto/products.dto';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/services/products/products.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'List of products' })
  @HttpCode(HttpStatus.OK)
  getAllProducts(): Product[] {
    return this.productService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one product by Id' })
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number): Product {
    return this.productService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new product' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateProductDto): any {
    return this.productService.create(body);
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update an individual product' })
  @HttpCode(HttpStatus.PARTIAL_CONTENT)
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto): Product {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete an individual product' })
  @HttpCode(HttpStatus.OK)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
