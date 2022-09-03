import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Client } from '@notionhq/client';
import { Cache } from 'cache-manager';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const diary_database_id = process.env.NOTION_DIARY_ID;
const thoughts_database_id = process.env.NOTION_THOUGHTS_ID;

@Injectable()
export class NotionService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  private readonly logger = new Logger(NotionService.name);

  @Cron('0 1 0 * * *')
  async createDiaryRegister() {
    const weekDay = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
    });

    const monthDay = new Date().toLocaleDateString('pt-BR');

    const dateTitle = `${weekDay} - ${monthDay}`;

    const response = await notion.pages.create({
      parent: { database_id: diary_database_id },
      properties: {
        title: {
          title: [
            {
              text: {
                content: dateTitle,
              },
            },
          ],
        },
      },
    });

    await this.cacheManager.set(monthDay, response.id, {
      ttl: 24 * 3600 * 7 /* 7 days */,
    });
  }

  async createThought(content: string) {
    const monthDay = new Date().toLocaleDateString('pt-BR');

    const related_day = await this.cacheManager.get(monthDay);

    const { id } = await notion.pages.create({
      parent: { database_id: thoughts_database_id },
      properties: {
        content: {
          title: [
            {
              text: {
                content,
              },
            },
          ],
        },
        'Related day': {
          relation: [
            {
              id: String(related_day),
            },
          ],
        },
      },
    });

    return {
      id,
      content,
    };
  }
}
