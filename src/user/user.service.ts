import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  async create(createUserDto: CreateUserDto) {
    const createdUser = await this.userRepository.create(createUserDto);
    const createdeUser = new CreateUserDto({ ...createdUser, _id: createdUser._id.toString() });
    console.log("🚀 ~ file: user.service.ts ~ line 13 ~ UserService ~ create ~ createdeUser", createdeUser);
    return createdeUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (user != null) {
      const newUser = new CreateUserDto({ email: user.email, name: user.name, _id: user._id.toString() });
      console.log("🚀 ~ file: user.service.ts ~ line 21 ~ UserService ~ findByEmail ~ newUser", newUser);
      return newUser;
    }
    console.log("🚀 ~ file: user.service.ts ~ line 30 ~ UserService ~ findByEmail ~ user ", "null");
    return null;
  }

  async findById(id: string) {
    const user = await this.userRepository.findById(id);
    if (user != null) {
      const newUser = new CreateUserDto({ email: user.email, name: user.name, _id: user._id.toString() });
      console.log("🚀 ~ file: user.service.ts ~ line 21 ~ UserService ~ findByEmail ~ newUser", newUser);
      return newUser;
    }
    console.log("🚀 ~ file: user.service.ts ~ line 30 ~ UserService ~ findByEmail ~ user ", "null");
    return null;
  }



  // update(id: number, updateUserDto: UpdateUserDto) {
  //   console.log("🚀 ~ file: user.service.ts ~ line 20 ~ UserService ~ update ~ updateUserDto", updateUserDto);
  //   return updateUserDto;
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
