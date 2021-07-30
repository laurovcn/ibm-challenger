import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {

  @ApiProperty() 
  name: string; 

  @ApiProperty() 
  description: string; 

  @ApiProperty() 
  author: string; 

  @ApiProperty() 
  userId: number; 
}
