
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Book{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  snb: string; 

  @Column()
  name: string; 
  
  @Column()
  description: string; 

  @Column()
  author: string; 

  @Column()
  userId: string;
  
  @ManyToOne(() => User, user => user.books)
  user: User;
  
}