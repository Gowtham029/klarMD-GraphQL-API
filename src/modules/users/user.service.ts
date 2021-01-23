import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./interface/user.interface";
import { userConstants } from "./user.const";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(userConstants.USER_SCHEMA)
        private readonly userModel: Model<User>,
    ) {}

    async update(_id: string, updateUserDto: any): Promise<any> {
        const result = await this.userModel.findByIdAndUpdate(
            _id,
            updateUserDto,
        );
        await result.save();
        return true;
    }

    async getUsers(skip: number, limit: number) {
        const result = await this.userModel
            .find({}, { password: 0 })
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: "desc" });
        return result;
    }

    async getUserById(id: string) {
        const result = await this.userModel.findById(id, { password: 0 });
        return result;
    }
}
