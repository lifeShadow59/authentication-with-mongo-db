import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsEmail, IsString } from "class-validator";

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



    constructor(partial: Partial<CreateUserDto>) {
        Object.assign(this, partial);
    }
}
