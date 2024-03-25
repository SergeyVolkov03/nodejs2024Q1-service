import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTrackDTO {
  @IsNotEmpty()
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

  @IsNotEmpty()
  @IsNumber()
  duration: number;
}
