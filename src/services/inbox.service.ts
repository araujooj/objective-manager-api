import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateInboxService {
  userId: string;
  title: string;
  link?: string;
}

@Injectable()
export class InboxService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getInboxesByUserId(userId: string) {
    await this.cacheManager.reset();

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
