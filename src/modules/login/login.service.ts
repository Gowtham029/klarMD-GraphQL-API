import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { compare } from "bcryptjs";
import { hash, genSalt } from "bcryptjs";
import { loginConstants } from "./login.const";
import { User } from "../users/interface/user.interface";
import { LoginRequestDto } from "./dto/login-request.dto";
import { RegisterUserDto } from "./dto/register-user.dto";

@Injectable()
export class LoginService {
    constructor(
        @InjectModel(loginConstants.LOGIN_SCHEMA)
        private readonly loginModel: Model<User>,
    ) {}

    async login(loginDto: LoginRequestDto): Promise<any> {
        const loginDetails = await this.loginModel.findOne({
            userName: loginDto.userName,
        });
        if (!loginDetails) {
            throw new HttpException(
                "Invalid Credentials",
                HttpStatus.UNAUTHORIZED,
            );
        }
        const passwordValidation = await compare(
            loginDto.password,
            loginDetails.password,
        );
        if (!passwordValidation) {
            throw new HttpException(
                "Invalida Credentials",
                HttpStatus.UNAUTHORIZED,
            );
        }
        delete loginDetails.password;
        return loginDetails;
    }

    async create(createUserDto: RegisterUserDto): Promise<any> {
        const isUserExists = await this.checkUserNameExists(
            createUserDto.phoneNumber,
        );
        if (isUserExists) {
            throw new HttpException(
                "User Name already Taken! Try with Others",
                HttpStatus.CONFLICT,
            );
        }
        const salt = await genSalt(loginConstants.SALT_PASSWORD_LENGHT);
        createUserDto.password = await hash(createUserDto.password, salt);
        const result = await this.loginModel.create(createUserDto);
        await result.save();
        return true;
    }

    async checkUserNameExists(userName: string) {
        const result = await this.loginModel.find({
            userName,
        });
        if (result.length > 0) {
            return true;
        }
        return false;
    }
}
