import { Module } from '@nestjs/common';
import { UsersController } from './controllers/usersController';
import { UsersApplicationService } from './applicationServices/usersApplicationService';

@Module({
  controllers: [UsersController],
  providers: [UsersApplicationService],
})
export class UsersModule {}
