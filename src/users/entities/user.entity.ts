
import { Book } from 'src/books/entities/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string; 

  @Column()
  lastname: string; 

  @OneToMany(() => Book, book => book.user, {
    cascade:true, eager: true,  nullable: false
  })
    books: Book[];
  
}