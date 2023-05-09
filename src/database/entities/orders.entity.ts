import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Carts } from './carts.entity';
import { Users } from './users.entity';
  
  @Entity()
  export class Orders {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Users)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: Users
  
    @OneToOne(() => Carts)
    @JoinColumn({ name: 'card_id', referencedColumnName: 'id' })
    carts: Carts;
  
    @Column({ type: 'json', nullable: false })
    payment: { type: string, mode?: string, paymentDetails?: any  }

    @Column({ type: 'json', nullable: false })
    delivery: { type: string, address?:any };

    @Column({ type: 'text', nullable: true })
    comments: string

    @Column({ type: 'enum', enum: ['OPEN','ORDERED'] , nullable: false })
    status: 'OPEN' | 'ORDERED'

    @Column({ type: 'int', nullable: false  })
    total: number
  }