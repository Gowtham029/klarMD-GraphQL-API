import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UsersSchema } from "./schema/user.schema";
import { userConstants } from "./user.const";
import { AuthModule } from "../../common/middlewares/auth/auth.module";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: userConstants.USER_SCHEMA, schema: UsersSchema },
        ]),
        AuthModule,
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
