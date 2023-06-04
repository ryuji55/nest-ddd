import { UserId } from '../valueObject/userId';
import { UserName } from '../valueObject/userName';

export class User {
  constructor(
    private readonly userId: UserId,
    private readonly userName: UserName,
  ) {}

  public getId() {
    return this.userId;
  }

  public getName() {
    return this.userName;
  }
}
