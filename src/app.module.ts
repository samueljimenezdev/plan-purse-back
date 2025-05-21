import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ExpenseTrackerModule } from './expense-tracker/expense-tracker.module';
import { BudgetModule } from './budget/budget.module';
import { ListsModule } from './lists/lists.module';


@Module({
  imports: [TasksModule, ExpenseTrackerModule, BudgetModule, ListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
