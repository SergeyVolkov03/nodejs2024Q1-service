// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   HttpCode,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { UuidValidate } from 'src/utilities/uuid';
// import { AlbumService } from './album.service';
// import { CreateAlbumDTO } from './dto/create-album-dto';
// import { UpdateAlbumDTO } from './dto/update-album-dto';

// @Controller('album')
// export class AlbumController {
//   constructor(private readonly albumService: AlbumService) {}

//   @Get()
//   getAlbums() {
//     return this.albumService.getAlbums();
//   }

//   @Get(':id')
//   getAlbum(@Param() param: UuidValidate) {
//     return this.albumService.getAlbumById(param.id);
//   }

//   @Post()
//   createAlbum(@Body() dto: CreateAlbumDTO) {
//     return this.albumService.createAlbum(dto);
//   }

//   @Put(':id')
//   updateAlbum(@Param() param: UuidValidate, @Body() dto: UpdateAlbumDTO) {
//     return this.albumService.updateAlbumById(param.id, dto);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   deleteAlbum(@Param() param: UuidValidate) {
//     return this.albumService.deleteAlbumById(param.id);
//   }
// }
