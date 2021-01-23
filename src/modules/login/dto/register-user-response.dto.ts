import { ApiProperty } from "@nestjs/swagger";
import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsBoolean,
    IsDateString,
} from "class-validator";

export class RegisterUserResponseDto {
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

    @ApiProperty()
    @IsOptional()
    @IsString()
    token: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    createdAt: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    createdBy: string;

    @ApiProperty()
    @IsOptional()
    @IsDateString()
    updatedAt: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    updatedBy: string;
}
