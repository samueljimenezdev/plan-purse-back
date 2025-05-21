import { Injectable } from '@nestjs/common';
import { CreateExpenseTrackerDto } from './dto/create-expense-tracker.dto';
import { UpdateExpenseTrackerDto } from './dto/update-expense-tracker.dto';

@Injectable()
export class ExpenseTrackerService {
  create(createExpenseTrackerDto: CreateExpenseTrackerDto) {
    return 'This action adds a new expenseTracker';
  }

  findAll() {
    return `This action returns all expenseTracker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expenseTracker`;
  }

  update(id: number, updateExpenseTrackerDto: UpdateExpenseTrackerDto) {
    return `This action updates a #${id} expenseTracker`;
  }

  remove(id: number) {
    return `This action removes a #${id} expenseTracker`;
  }
}
