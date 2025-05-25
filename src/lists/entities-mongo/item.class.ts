import { Prop } from "@nestjs/mongoose";

export class Item{

    @Prop({ required: true, unique: true,  index: true })
    id: String;

    @Prop({ required: true })
    description: String;
}