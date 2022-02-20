import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserSchema & Document;

@Schema()
export class UserSchema {

    @Prop({ required: true, index: true })
    name: string;

    @Prop({ required: true, index: true, unique: true })
    email: string;

    @Prop({ required: true, })
    password: string;

}

export const UserSchemas = SchemaFactory.createForClass(UserSchema);