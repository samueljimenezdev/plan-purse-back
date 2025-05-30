import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { List, ListSchema } from './entities-mongo/list.entity';

@Module({
  controllers: [ListsController],
  providers: [ListsService],
    imports: [
      MongooseModule.forFeature([
        {
          name: List.name,
          schema: ListSchema,
        },
      ]),
    ],
})
export class ListsModule {}
