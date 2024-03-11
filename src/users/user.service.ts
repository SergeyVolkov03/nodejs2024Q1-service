import { CreateUserDTO } from './dto/create-user.dto';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './types/user.type';
import { v4 } from 'uuid';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {
  users: User[] = [];

  getUsers() {
    return this.users;
  }

  getUserById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  createUser(dto: CreateUserDTO) {
    const user = {
      ...dto,
      id: v4(),
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.users.push(user);
    return user;
  }

  updateUserById(id: string, dto: UpdateUserDTO) {
    const user = this.getUserById(id);
    if (dto.oldPassword !== user.password) {
      throw new ForbiddenException('Password is not correct');
    }
    const updatedUser = {
      ...user,
      password: dto.newPassword,
      version: user.version + 1,
      updatedAt: Date.now(),
    };
    this.users = this.users.map((user) =>
      user.id === id ? updatedUser : user,
    );
    return updatedUser;
  }

  deleteUserById(id: string) {
    this.getUserById(id);
    this.users = this.users.filter((user) => user.id !== id);
  }
}
