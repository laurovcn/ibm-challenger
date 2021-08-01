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

  findAll(options: IPaginationOptions): Promise<Pagination<Book>> {  
    return paginate<Book>(this.booksRepository, options);
  }

  findByUserId(options: IPaginationOptions, userId: number): Promise<Pagination<Book>> {  
    return paginate<Book>(this.booksRepository, options, {
      where: { userId }, select: ['name']
    });
  }

  findOne(id: number) {
    return this.booksRepository.findOne({id});
  } 

  update(id: number, updateBookDto: UpdateBookDto) {   
    return this.booksRepository.update(id, updateBookDto);
  }

  remove(id: number) {
    return this.booksRepository.delete(id);
  }
}
