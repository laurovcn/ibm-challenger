import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {  
 
  @ApiProperty() 
  firstname: string; 

  @ApiProperty()  
  lastname: string;
 
}