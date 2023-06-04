export class UserId {
  constructor(private readonly value: string) {}

  public getId(): string {
    return this.value;
  }
}
