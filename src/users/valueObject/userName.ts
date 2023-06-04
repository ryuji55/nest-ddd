export class UserName {
  constructor(private readonly value: string) {}

  public getName(): string {
    return this.value;
  }
}
