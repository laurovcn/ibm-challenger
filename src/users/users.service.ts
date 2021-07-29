import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

    create(createUserDto: CreateUserDto) {   
      return this.usersRepository.save(createUserDto);      
    }   

    findAll() {
      return this.usersRepository.find();
    }

    findOne(id: number) {
      return this.usersRepository.findOne({id});
    }    

    async update(id: number, updateUserDto: UpdateUserDto) {    
       await this.usersRepository.findOne({id});
       return await this.usersRepository.update(id, updateUserDto);      
    }

    remove(id: number) {
      return this.usersRepository.delete(id);
    }
}