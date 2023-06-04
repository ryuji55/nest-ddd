import { UsersApplicationService } from '../applicationServices/usersApplicationService';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '../entities/user';
import { UserId } from '../valueObject/userId';
import { UserName } from '../valueObject/userName';
import { CreateUserCommand } from '../commands/createUserCommand';
import { UserResponseDTO } from '../dto/userResponseDTO';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersApplicationService: UsersApplicationService,
  ) {}
  @Get()
  findAll(): UserResponseDTO[] {
    return this.usersApplicationService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): UserResponseDTO {
    return this.usersApplicationService.findById(id);
  }

  @Post()
  create(@Body() command: CreateUserCommand): UserResponseDTO {
    const userId = new UserId(command.id);
    const userName = new UserName(command.name);
    const user = new User(userId, userName);
    return this.usersApplicationService.create(user);
  }
}
