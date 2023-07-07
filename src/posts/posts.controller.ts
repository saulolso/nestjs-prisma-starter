import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from './posts.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Post as PostModel } from './models/post.model';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePostDto.dto';
import { ParseObjectIdPipe } from 'src/common/validators/validators';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiCreatedResponse({ type: PostModel })
  create(@Body() postDto: CreatePostDto) {
    return this.postService.create(postDto);
  }

  @Get()
  @ApiCreatedResponse({ type: PostModel })
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: PostModel })
  async findOne(@Param('id', ParseObjectIdPipe) id: string) {
    const article = await this.postService.findOne(id.toString());
    if (!article) {
      throw new NotFoundException(`Product with id: ${id} not found.`);
    }
    return article;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: PostModel })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updatePostDto: UpdatePostDto
  ) {
    return this.postService.update(id.toString(), updatePostDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: PostModel })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.postService.remove(id.toString());
  }
}
