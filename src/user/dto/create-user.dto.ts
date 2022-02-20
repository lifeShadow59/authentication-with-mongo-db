import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsDefined, IsEmail, IsOptional, IsString } from "class-validator";

export class LoginUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @Exclude()
    @ApiProperty()
    @IsString()
    password: string;
}

export class CreateUserDto extends LoginUserDto {
    @ApiHideProperty()
    _id: string;

    @ApiProperty()
    @IsString()
    name: string;

    @IsOptional()
    @IsDefined()
    @ApiHideProperty()
    @IsString()
    accessToken: string;



    constructor(partial: Partial<CreateUserDto>) {
        super();
        Object.assign(this, partial);
    }
}


