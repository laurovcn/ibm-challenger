import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {

  @ApiProperty() 
  snb: string; 

  @ApiProperty() 
  name: string; 

  @ApiProperty() 
  description: string; 

  @ApiProperty() 
  author: string; 

  @ApiProperty() 
  userId: string; 

}
