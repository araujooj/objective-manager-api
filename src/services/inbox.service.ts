import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateInboxService {
  userId: string;
}

@Injectable()
export class InboxService {
  constructor(private prisma: PrismaService) {}
}
