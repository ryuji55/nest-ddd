import { UserResponse } from './../../../dist/users/dto/userResponse.d';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { UserResponseDTO } from '../dto/userResponseDTO';
import { UserId } from '../valueObject/userId';
import { UserName } from '../valueObject/userName';
import { UpdateUserCommand } from '../commands/updateUserCommand';
import { DeleteUserCommand } from '../commands/deleteUserCommand';

@Injectable()
export class UsersApplicationService {
  private users: UserResponseDTO[] = [];
  findAll(): UserResponseDTO[] {
    return this.users;
  }

  findById(id: string): UserResponseDTO {
    return this.users.find((user) => user.id === id);
  }

  create(user: User): UserResponseDTO {
    const userResponse = user.toDTO();
    this.users.push(userResponse);
    return userResponse;
  }

  updateUser(command: UpdateUserCommand): UserResponseDTO {
    const targetUser = this.users.find(
      (user) => user.id === command.userId.getId(),
    );
    if (!targetUser) {
      throw new Error('ユーザは存在しません');
    }

    const id = new UserId(targetUser.id);
    const name = new UserName(targetUser.name);
    const updateUser = new User(id, name);

    updateUser.updateName(command.newUserName);

    return updateUser.toDTO();
  }

  deleteUser(command: DeleteUserCommand): void {
    this.users = this.users.filter((user) => user.id !== command.id);
  }
}
