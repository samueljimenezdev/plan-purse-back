import { Module } from '@nestjs/common';
import { ExpenseTrackerService } from './expense-tracker.service';
import { ExpenseTrackerController } from './expense-tracker.controller';

@Module({
  controllers: [ExpenseTrackerController],
  providers: [ExpenseTrackerService],
})
export class ExpenseTrackerModule {}
