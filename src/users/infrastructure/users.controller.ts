import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../application/services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;
    const user = { username, password, capital: 0 };
    return this.usersService.create(user);
  }
}
