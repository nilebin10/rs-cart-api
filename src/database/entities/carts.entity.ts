import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { CartItems } from './cart_items.entity';
import { Users } from './users.entity';
  
  @Entity()
  export class Carts {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @OneToOne(() => Users)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user_id: string
  
    @Column({ type: 'date', nullable: false })
    created_at: string;

    @Column({ type: 'date', nullable: false })
    updated_at: string;

    @Column({ type: 'enum', enum: ['OPEN', 'ORDERED'], nullable: false})
    status: string

    @OneToMany(() => CartItems, (cartItem) => cartItem)
    items: CartItems[]
  }