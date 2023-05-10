import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Carts } from './carts.entity';
  
  @Entity()
  export class CartItems {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'uuid', nullable: false })
    product_id: string;
  
    @Column({ type: 'int', nullable: false })
    count: number;

    @ManyToOne(() => Carts, (Cart) => Cart.items)
    cart: Carts
  }