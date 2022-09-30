import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Patch, HttpCode } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dto/users';
import { UsersService } from 'src/users/services/users/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'List of users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one user by Id' })
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Get(':id/orders')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one order by user Id' })
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getOrdersByUser(id);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new user' })
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update an individual user' })
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUserDto) {
    return this.usersService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete an individual user' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
