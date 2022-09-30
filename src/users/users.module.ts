import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersService } from './services/customers/customers.service';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [],
  controllers: [CustomersController, UsersController],
  providers: [UsersService, CustomersService],
})
export class UserModule {}