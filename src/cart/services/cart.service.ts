import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 

import { Cart } from '../models';
import { Carts } from '../../database/entities/carts.entity';
@Injectable()
export class CartService {

  constructor(
    @InjectRepository(Carts)
    private readonly cartsRepo: Repository<Carts>
  ){}

  async findByUserId(userId: string): Promise<any> {
    const cart = await this.cartsRepo.findOne({ where: {user_id: userId}, select: ['id', 'items'] });
    return cart;
  }

  async createByUserId(userId: string) {
    try{
      await this.cartsRepo.insert({
        user_id: userId,
        created_at: '23-04-2023',
        updated_at: '23-04-2023'
      })
      return true;
    }catch(e){
      return false;
    }
  }

  async findOrCreateByUserId(userId: string): Promise<any> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, { items }: Cart): Promise<any>  {
    const { id} = await this.findOrCreateByUserId(userId);

    let res;
    try{
      res = await this.cartsRepo.update({ id }, { items: [...items] })
    }catch(e)
    {
      return false;
    }
    return res;
  }

  async removeByUserId(userId): Promise<boolean> {
    try{
      await this.cartsRepo.delete({user_id: userId});
      return true;
    }catch(e){
      return false
    }
  }

}
