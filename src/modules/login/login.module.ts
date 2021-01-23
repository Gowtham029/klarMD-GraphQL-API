import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { loginConstants } from "./login.const";
import { UsersSchema } from "../users/schema/user.schema";
import { AuthModule } from "../../common/middlewares/auth/auth.module";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: loginConstants.LOGIN_SCHEMA, schema: UsersSchema },
        ]),
        AuthModule,
    ],
    controllers: [LoginController],
    providers: [LoginService],
    exports: [LoginService],
})
export class LoginModule {}
