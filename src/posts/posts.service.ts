import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create(postDto: CreatePostDto) {
    return this.prisma.post.create({ data: postDto });
  }

  findAll() {
    return this.prisma.post.findMany({ where: { published: true } });
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }
  remove(id: string) {
    return this.prisma.post.delete({ where: { id } });
  }
}
