import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateTrackDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsUUID()
  artistId: string | null;

  @IsOptional()
  @IsString()
  @IsUUID()
  albumId: string | null;

  @IsOptional()
  @IsNumber()
  duration: number;
}
