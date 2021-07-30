import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}
  
  create(createBookDto: CreateBookDto) {
    return this.booksRepository.save(createBookDto);
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Book>>  {
    return paginate<Book>(this.booksRepository, options);
  }

  findOne(userId: number) {
    return this.booksRepository.findOne({userId});
  } 

  async update(id: number, updateBookDto: UpdateBookDto) {
    await this.booksRepository.findOne({id});
    return await this.booksRepository.update(id, updateBookDto);
  }

  remove(id: number) {
    return this.booksRepository.delete(id);
  }
}
