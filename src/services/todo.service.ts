import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateTodoService {
  userId: string;
  title: string;
  status: 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'STUCK';
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  dueDate: Date;
  necessaryHours: number;
  okrId?: string;
  packageId?: string;
  inboxId: string;
}

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  getTodosByUserId(userId: string) {
    return this.prisma.todo.findMany({
      where: {
        userId,
      },
    });
  }

  createTodo(data: CreateTodoService) {
    return this.prisma.todo.create({
      data,
    });
  }
}
