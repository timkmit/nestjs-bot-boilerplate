import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: { firstName: string; lastName: string; username: string }) {
    return this.prisma.user.create({
      data,
    });
  }

  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  async findUserByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }
}
