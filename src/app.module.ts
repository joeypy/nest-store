import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { ProductsService } from './services/products/products.service';
import { CustomersService } from './services/customers/customers.service';
import { BrandsService } from './services/brands/brands.service';
import { UsersService } from './services/users/users.service';
import { CategoriesService } from './services/categories/categories.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    UsersController,
    BrandsController,
    CustomersController,
  ],
  providers: [AppService, ProductsService, CustomersService, BrandsService, UsersService, CategoriesService],
})
export class AppModule {}
