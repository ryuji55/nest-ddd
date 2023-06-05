import { UserId } from '../valueObject/userId';
import { UserName } from '../valueObject/userName';

export class UpdateUserCommand {
  constructor(
    public readonly userId: UserId,
    public readonly newUserName: UserName,
  ) {}
}
