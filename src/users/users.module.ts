import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersApplicationService } from './applicationServices/usersApplicationService';

@Module({
  controllers: [UsersController],
  providers: [UsersApplicationService],
})
export class UsersModule {}
