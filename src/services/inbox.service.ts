import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateInboxService {
  userId: string;
  title: string;
  link?: string;
}

@Injectable()
export class InboxService {
  constructor(private prisma: PrismaService) {}

  getInboxesByUserId(userId: string) {
    return this.prisma.inbox.findMany({
      where: {
        userId,
      },
    });
  }

  createInbox({ userId, title, link }: CreateInboxService) {
    return this.prisma.inbox.create({
      data: {
        userId,
        title,
        link,
      },
    });
  }
}
