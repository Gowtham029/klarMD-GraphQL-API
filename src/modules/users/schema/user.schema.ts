import * as mongoose from "mongoose";

export const UsersSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        isPhoneNumberVerified: { type: Boolean, required: true },
        isEmailVerified: { type: Boolean, required: true },
        createdAt: { type: Date, default: Date.now },
        createdBy: { type: String },
        updatedAt: { type: Date, default: Date.now },
        updatedBy: { type: String },
    },
    { timestamps: true, versionKey: false },
);
