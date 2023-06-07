import { UsersApplicationService } from '../applicationServices/usersApplicationService';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from '../entities/user';
import { UserId } from '../valueObject/userId';
import { UserName } from '../valueObject/userName';
import { CreateUserCommand } from '../commands/createUserCommand';
import { UserResponseDTO } from '../dto/userResponseDTO';
import { UpdateUserCommand } from '../commands/updateUserCommand';
import { DeleteUserCommand } from '../commands/deleteUserCommand';

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

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body('name') name: string,
  ): UserResponseDTO {
    const userId = new UserId(id);
    const newUserName = new UserName(name);
    const command = new UpdateUserCommand(userId, newUserName);
    return this.usersApplicationService.updateUser(command);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    const command = new DeleteUserCommand(id);
    this.usersApplicationService.deleteUser(command);
  }
}
