import { ApiProperty } from "@nestjs/swagger";
import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsBoolean,
    IsDateString,
} from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    userName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    isAdmin: boolean;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    status: boolean;

    @ApiProperty()
    @IsOptional()
    @IsDateString()
    lastLogin: Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    imageURL: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    designation: string;
}
