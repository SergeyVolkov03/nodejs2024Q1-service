import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UuidValidate {
  @IsNotEmpty()
  @IsString()
  @IsUUID(4, { each: true })
  id: string;
}
