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
import { UserService } from './user.service';
import { UuidValidate } from 'src/utilities/uuid';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param() param: UuidValidate) {
    return this.userService.getUserById(param.id);
  }

  @Post()
  createUser(@Body() user: CreateUserDTO) {
    return this.userService.createUser(user);
  }

  @Put(':id')
  updateUser(@Param() param: UuidValidate, @Body() updateData: UpdateUserDTO) {
    return this.userService.updateUserById(param.id, updateData);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param() param: UuidValidate) {
    return this.userService.deleteUserById(param.id);
  }
}
