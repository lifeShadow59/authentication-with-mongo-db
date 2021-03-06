import { ConflictException, Injectable, PreconditionFailedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserSchema, UserDocument } from "../schemas/user.schema";
import { Model } from 'mongoose';
import { CreateUserDto } from "../dto/create-user.dto";
// import { CallbackError } from "mongoose/types/index";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(UserSchema.name) private userModel: Model<UserSchema>) { }

    async create(createCatDto: CreateUserDto) {
        const createdUser = new this.userModel(createCatDto);
        try {
            const saveDoc = await createdUser.save();
            return saveDoc;
        } catch (error) {
            console.log("🚀 ~ file: user.repository.ts ~ line 17 ~ UserRepository ~ createdUser.save ~ error.name", error.message);
            throw new ConflictException(error.name, error.message);
        }
    }

    async findByEmail(email: string) {
        return this.userModel.findOne({ email: email }).exec();
    }

    async findById(id: string) {
        return this.userModel.findOne({ _id: id }).exec();
    }
}