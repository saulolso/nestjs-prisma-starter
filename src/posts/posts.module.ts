import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostService } from './posts.service';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [PostService],
  controllers: [PostsController],
})
export class PostsModule {}
