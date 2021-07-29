import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'dev',
    password: 'Dev612@dev',
    database: 'dev',
    entities: [User, Book],
    synchronize: true,
  }), UsersModule, BooksModule,], 
})
export class AppModule {}
