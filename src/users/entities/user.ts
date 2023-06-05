import { UserResponseDTO } from '../dto/userResponseDTO';
import { UserId } from '../valueObject/userId';
import { UserName } from '../valueObject/userName';

export class User {
  constructor(private readonly userId: UserId, private userName: UserName) {}

  public getId() {
    return this.userId;
  }

  public getName() {
    return this.userName;
  }

  public updateName(newName: UserName): void {
    this.userName = newName;
  }

  public toDTO(): UserResponseDTO {
    return {
      id: this.userId.getId(),
      name: this.userName.getName(),
    };
  }
}
