import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskMongoRepository } from './repositories/tasks.mongo.repository';

@Injectable()
export class TasksService {

  constructor( private readonly taskRepository: TaskMongoRepository) {}
  
  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.create(createTaskDto);
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
