import { ApiHideProperty, ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
    @IsOptional()
    @ApiPropertyOptional()
    @IsString()
    name: string;

    @IsOptional()
    @ApiPropertyOptional()
    @IsEmail()
    email: string;
}
