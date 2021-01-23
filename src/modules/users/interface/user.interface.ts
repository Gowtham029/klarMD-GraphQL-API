import { Document } from "mongoose";

export interface User extends Document {
    name: String;
    email: String;
    password: String;
    phoneNumber: String;
    isPhoneNumberVerified?: Boolean;
    isEmailVerified?: Boolean;
    createdAt?: Date;
    createdBy?: string;
    updatedAt?: Date;
    updatedBy?: String;
}
