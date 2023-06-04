import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { UserResponseDTO } from '../dto/userResponseDTO';

@Injectable()
export class UsersApplicationService {
  private users: UserResponseDTO[] = [];
  findAll(): UserResponseDTO[] {
    return this.users;
  }

  create(user: User): UserResponseDTO {
    const userResponse = {
      id: user.getId().getId(),
      name: user.getName().getName(),
    };
    this.users.push(userResponse);
    return userResponse;
  }
}
