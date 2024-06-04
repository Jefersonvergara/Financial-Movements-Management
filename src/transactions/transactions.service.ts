import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';
import { UsersService } from '../users/application/services/users.service';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
    private usersService: UsersService,
  ) {}

  async create(transaction: Transaction): Promise<Transaction> {
    console.log('Creating transaction:', transaction);
    const createdTransaction = new this.transactionModel(transaction);
    await this.usersService.updateCapital(
      transaction.username,
      transaction.amount,
    );
    return createdTransaction.save();
  }

  async findAll(username: string): Promise<Transaction[]> {
    return this.transactionModel.find({ username }).exec();
  }

  async delete(id: string): Promise<Transaction> {
    return this.transactionModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, transaction: Transaction): Promise<Transaction> {
    return this.transactionModel
      .findByIdAndUpdate(id, transaction, { new: true })
      .exec();
  }

  async getTotal(username: string): Promise<number> {
    const transactions = await this.transactionModel.find({ username }).exec();
    let total = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === 'income') {
        total += transaction.amount;
      } else if (transaction.type === 'expense') {
        total -= transaction.amount;
      }
    });

    return total;
  }
}
