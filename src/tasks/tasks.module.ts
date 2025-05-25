import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task, TasksSchema } from './entities-mongo/task.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskMongoRepository } from './repositories/tasks.mongo.repository';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TaskMongoRepository],
  imports: [
    MongooseModule.forFeature([
      {
        name: Task.name,
        schema: TasksSchema,
      },
    ]),
  ],
})
export class TasksModule {}
