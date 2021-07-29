import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {  
 
  @ApiProperty() 
  firstname: string; 

  @ApiProperty()  
  lastname: string;
 
  @ApiProperty() 
  books: [{
    snb: string,
    name: string,
    description: string,
    author: string,
    userId: string,
  }] 
}