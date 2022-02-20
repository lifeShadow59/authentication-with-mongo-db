import { Body, ClassSerializerInterceptor, Controller, Get, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, LoginUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Controller('auth')
@ApiTags('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    console.log("🚀 ~ file: auth.controller.ts ~ line 22 ~ AuthController ~ login ~ loginUserDto", loginUserDto);
    return this.authService.login(loginUserDto);
  }

  @Post('signup')
  signUp(@Body() createUserDto: CreateUserDto) {
    console.log("🚀 ~ file: auth.controller.ts ~ line 22 ~ AuthController ~ signUp ~ createUserDto", createUserDto);
    return this.authService.signUp(createUserDto);
  }

}
