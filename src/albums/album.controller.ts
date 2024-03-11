import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UuidValidate } from 'src/utilities/uuid';
import { AlbumService } from './album.service';
import { CreateAlbumDTO } from './dto/create-album-dto';
import { UpdateAlbumDTO } from './dto/update-album-dto';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  getArtists() {
    return this.albumService.getAlbums();
  }

  @Get(':id')
  getArtist(@Param() param: UuidValidate) {
    return this.albumService.getAlbumById(param.id);
  }

  @Post()
  createArtist(@Body() dto: CreateAlbumDTO) {
    return this.albumService.createAlbum(dto);
  }

  @Put(':id')
  updateArtist(@Param() param: UuidValidate, @Body() dto: UpdateAlbumDTO) {
    return this.albumService.updateAlbumById(param.id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteArtist(@Param() param: UuidValidate) {
    return this.albumService.deleteAlbumById(param.id);
  }
}
