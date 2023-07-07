import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  content?: string | null;
  @ApiProperty()
  published: boolean;
  @ApiProperty()
  authorId?: string | null;
}
