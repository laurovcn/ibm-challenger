import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'dev',
    password: 'Dev612@dev',
    database: 'dev',
    entities: [
      __dirname + '/**/**/*.entity{.ts,.js}',
  ],
    synchronize: true,
  }), UsersModule, BooksModule,], 
})
export class AppModule {}
