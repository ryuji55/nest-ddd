import { UsersApplicationService } from '../applicationServices/usersApplicationService';
import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  create(@Body() command: CreateUserCommand): UserResponseDTO {
    const userId = new UserId(command.id);
    const userName = new UserName(command.name);
    const user = new User(userId, userName);
    return this.usersApplicationService.create(user);
  }
}
