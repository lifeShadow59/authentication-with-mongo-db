import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) { }



    async signUp(createUserDto: CreateUserDto) {
        const createdUser: CreateUserDto = await this.userService.create(createUserDto);
        const payload = { email: createdUser.email, id: createdUser._id };
        return new CreateUserDto({ ...createdUser, "accessToken": this.jwtService.sign(payload) });
    }
}
