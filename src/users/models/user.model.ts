import 'reflect-metadata';

import { IsEmail } from 'class-validator';
import { Post } from '../../posts/models/post.model';
import { BaseModel } from 'src/common/models/base.model';
import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class User extends BaseModel {
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
