import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateAlbumDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  grammy: boolean;

  @IsOptional()
  @IsNumber()
  year: number;

  @IsOptional()
  @IsString()
  @IsUUID()
  artistId: string | null;
}
