import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategy';
import { Carts } from './entities/carts.entity';
import { CartItems } from './entities/cart_items.entity';
import { Orders } from './entities/orders.entity';
import { Users } from './entities/users.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [__dirname + '../**/*.entity{.ts, .js}'],
            logging: true,
            autoLoadEntities: true,
            namingStrategy: new SnakeNamingStrategy(),
        }),
        TypeOrmModule.forFeature([ Carts, CartItems, Orders, Users ]),
    ],
    exports: [TypeOrmModule]
})
export class DatabaseModule {

}