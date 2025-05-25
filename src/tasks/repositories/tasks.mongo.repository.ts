import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task } from "../entities-mongo/task.entity";
import { CreateTaskDto } from "../dto/create-task.dto";

@Injectable()
export class TaskMongoRepository {
    
    constructor(
        @InjectModel(Task.name)
        private readonly taskModel: Model<Task>,
    ) { }

    async create(createTaskDto: CreateTaskDto){
        const task = await this.taskModel.create(createTaskDto);
        return task;
    }
}
