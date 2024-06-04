import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  /* UseGuards */
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './schemas/transaction.schema';
//import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
//import { AuthGuard } from '@nestjs/passport';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  //@UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() transaction: Transaction) {
    return this.transactionsService.create(transaction);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Get(':username')
  async findAll(@Param('username') username: string) {
    return this.transactionsService.findAll(username);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.transactionsService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() transaction: Transaction) {
    return this.transactionsService.update(id, transaction);
  }

  @Get('total/:username')
  async getTotal(@Param('username') username: string) {
    const total = await this.transactionsService.getTotal(username);
    return { total };
  }
}
