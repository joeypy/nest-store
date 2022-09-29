import { Body, Controller, Delete, Get, Param, Post, HttpStatus, HttpCode, Patch, ParseIntPipe } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/common/dto/products.dto';
import { Product } from 'src/entities/product.entity';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAllProducts(): Product[] {
    return this.productService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number): Product {
    return this.productService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateProductDto): any {
    return this.productService.create(body);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.PARTIAL_CONTENT)
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto): Product {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
