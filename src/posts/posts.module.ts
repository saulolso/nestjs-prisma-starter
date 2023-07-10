import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostService } from './posts.service';

@Module({
  providers: [PostService],
  controllers: [PostsController],
})
export class PostsModule {}
