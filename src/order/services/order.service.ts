import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../models';
import { Orders } from '../../database/entities/orders.entity';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Orders)
    private readonly orderRepo: Repository<Orders>
  ){}
  
  async findById(orderId: string): Promise<any> {
    const order = await this.orderRepo.findOne({ where: { id: orderId } })
    return order;
  }

  async create(data: any): Promise<boolean> {
    try {
      await this.orderRepo.insert({
        ...data,
        status: 'OPEN'
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  async update(orderId, data) {
    const order = await this.findById(orderId);

    if (!order) {
      throw new Error('Order does not exist.');
    }

    try {
      await this.orderRepo.update({ id: orderId }, { ...data });
      return true
    } catch (error) {
      return false;
    }
  }
}
