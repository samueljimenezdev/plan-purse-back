import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export const StatusEnum = {
    TO_DO: 'to_do',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed',
};

export type CatDocument = HydratedDocument<Task>;

@Schema()
export class Task {
    
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop()
    dueDate: Date;

    @Prop({ required: true, index: true, enum: Object.values(StatusEnum) })
    status: string;

    @Prop({ required: true, min: 1 })
    priority: number;

    @Prop({ required: true })
    createdAt: Date;

    @Prop({ type: [String], index: true })
    tags: string[];

}

export const TasksSchema = SchemaFactory.createForClass(Task);

