import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CustomersService } from 'src/users/services/customers/customers.service';
import { Controller, Get, Param, Post, Body, Patch, Delete, ParseIntPipe, HttpCode } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/users/dto/customer.dto';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'List of customers' })
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one customer by Id' })
  get(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new customer' })
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update an individual customer' })
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCustomerDto) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete an individual customer' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.remove(+id);
  }
}
