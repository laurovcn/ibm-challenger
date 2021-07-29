import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'dev',
    password: 'Dev612@dev',
    database: 'dev',
    entities: [],
    synchronize: true,
  }), UsersModule,], 
})
export class AppModule {}
