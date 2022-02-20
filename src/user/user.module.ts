import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema, UserSchemas } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserSchema.name, schema: UserSchemas },],),],
  controllers: [UserController],
  providers: [UserService, UserRepository]
})
export class UserModule { }
