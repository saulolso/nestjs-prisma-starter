import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  firstname?: string;

  @ApiProperty()
  lastname?: string;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  postsIds?: string[] | null;
}
