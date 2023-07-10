import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePostDto.dto';

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
    console.log('here,' + updatePostDto);
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }
  remove(id: string) {
    return this.prisma.post.delete({ where: { id } });
  }
}

// @Injectable()
// export class ParseObjectIdPipe implements PipeTransform<any, ObjectId> {
//   public transform(value: any): ObjectId {
//     try {
//       const transformedObjectId: ObjectId = ObjectId.createFromHexString(value);
//       return transformedObjectId;
//     } catch (error) {
//       throw new BadRequestException('Validation failed (ObjectId is expected)');
//     }
//   }
// }
