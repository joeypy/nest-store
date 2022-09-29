import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  // Two parameters
  @Get(':id/products/:productId')
  getCategoryByProductId(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `Category ${id} with product id: ${productId}`;
  }
}
