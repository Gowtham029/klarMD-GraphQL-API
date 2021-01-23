import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class LoginRequestDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    userName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;
}
