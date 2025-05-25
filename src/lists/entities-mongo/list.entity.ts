import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Item } from './item.class';
export type ListDocument = HydratedDocument<List>;

@Schema()
export class List {

  @Prop({ required: true, unique: true,  index: true })
  title: string;

  @Prop({ })
  description: string;

  @Prop({ required: true })
  items: Item[];
  
  @Prop({ required: true, default: 0 })
  version: number;
}

export const ListSchema = SchemaFactory.createForClass(List);
