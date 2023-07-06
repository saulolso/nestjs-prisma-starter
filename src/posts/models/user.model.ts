import 'reflect-metadata';

import { IsEmail } from 'class-validator';
import { Post } from './post.model';
import { BaseModel } from 'src/common/models/base.model';
import { Role } from '@prisma/client';

export class User extends BaseModel {
  @IsEmail()
  email: string;
  firstname?: string;
  lastname?: string;
  role: Role;
  posts?: [Post] | null;
}
