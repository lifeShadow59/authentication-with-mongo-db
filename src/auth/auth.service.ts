import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) { }



    async signUp(createUserDto: CreateUserDto) {
        const createdUser: CreateUserDto = await this.userService.create(createUserDto);
        
        const payload = { email: createdUser.email, id: createdUser._id };
        return new CreateUserDto({ ...createdUser, "accessToken": this.jwtService.sign(payload) });
    }


    async login(loginUserDto: LoginUserDto) {
        const user = await this.userService.findByEmail(loginUserDto.email);
        console.log("🚀 ~ file: auth.service.ts ~ line 22 ~ AuthService ~ login ~ user", user);
        if (user == null) {
            throw new NotFoundException("User not found.");
        }
        const payload = { email: user.email, id: user._id };
        return new CreateUserDto({ ...user, "accessToken": this.jwtService.sign(payload) });
    }
}
