import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import ObjectID from 'bson-objectid';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform<any, ObjectID> {
  public transform(value: any): ObjectID {
    try {
      const transformedObjectId: ObjectID = ObjectID.createFromHexString(value);
      return transformedObjectId;
    } catch {
      throw new BadRequestException('Validation failed (ObjectId is expected)');
    }
  }
}
