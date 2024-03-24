import { CreateUserDTO } from './dto/create-user.dto';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 } from 'uuid';
import { UpdateUserDTO } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers() {
    return await this.userRepository.find();
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async createUser(dto: CreateUserDTO) {
    const newUser = {
      ...dto,
      id: v4(),
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const createdUser = this.userRepository.create(newUser);
    await this.userRepository.save(createdUser);
    const user = { ...createdUser };
    delete user.password;
    return user;
  }

  async updateUserById(id: string, dto: UpdateUserDTO) {
    const user = await this.getUserById(id);
    if (dto.oldPassword !== user.password) {
      throw new ForbiddenException('Password is not correct');
    }
    const updatedUser = {
      ...user,
      password: dto.newPassword,
      version: user.version + 1,
      updatedAt: Date.now(),
    };
    await this.userRepository.save(updatedUser);
    const userResponse = { ...updatedUser };
    delete userResponse.password;
    return userResponse;
  }

  async deleteUserById(id: string) {
    await this.getUserById(id);
    await this.userRepository.delete(id);
  }
}
