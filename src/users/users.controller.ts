import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: { firstName: string; lastName: string; username: string }) {
    return this.usersService.createUser(body);
  }

  @Get()
  async findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':username')
  async findUserByUsername(@Param('username') username: string) {
    return this.usersService.findUserByUsername(username);
  }
}
