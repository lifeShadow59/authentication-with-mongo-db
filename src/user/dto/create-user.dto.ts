import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsDefined, IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @ApiHideProperty()
    _id: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @Exclude()
    @ApiProperty()
    @IsString()
    password: string;

    @IsOptional()
    @IsDefined()
    @ApiHideProperty()
    @IsString()
    accessToken: string;



    constructor(partial: Partial<CreateUserDto>) {
        Object.assign(this, partial);
    }
}
