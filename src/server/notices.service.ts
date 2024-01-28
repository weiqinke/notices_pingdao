import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { NoticeEntity } from 'src/entitys/notice.entity';
import { PlacardEntity } from 'src/entitys/placard.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class NoticesService {
  constructor(private dataSource: DataSource) {}

  // 获取模板消息，只是静态值
  async getTemplateNotices(): Promise<any> {
    const notices = await this.dataSource
      .getRepository(NoticeEntity)
      .createQueryBuilder('notice')
      .where('notice.type = :type', { type: 'temp' })
      .getMany();

    return notices.map((item: NoticeEntity) => {
      return {
        id: item.id,
        avatar: item.avatar,
        type: item.type,
        description: item.description,
        status: item.status,
        extra: item.extra,
        created: dayjs(item.created).format('yyyy-MM-DD hh:mm:ss'),
      };
    });
  }

  // 获取某一个 uid 用户的消息和通知
  async getUidNotices(payload: any): Promise<any> {
    const { uid, isread = 0 } = payload;
    const notices = await this.dataSource
      .getRepository(NoticeEntity)
      .createQueryBuilder('notice')
      .addSelect('isread')
      .addSelect('isdelete')
      .where('notice.uid = :uid', { uid })
      .where('notice.isread = :isread', { isread })
      .getMany();

    return notices.map((item: NoticeEntity) => {
      return {
        id: item.id,
        avatar: item.avatar,
        type: item.type,
        description: item.description,
        status: item.status,
        extra: item.extra,
        created: dayjs(item.created).format('yyyy-MM-DD hh:mm:ss'),
      };
    });
  }

  /**获取一个类型的未读的通知 */
  async AllPlacard(payload: any): Promise<PlacardEntity[]> {
    const { type, status, uid } = payload;
    const result: PlacardEntity[] = await this.dataSource
      .getRepository(PlacardEntity)
      .createQueryBuilder('placard')
      .where('placard.type = :type', { type })
      .where('placard.status = :status', { status })
      .where('placard.broadcastime <> 0')
      .addOrderBy('placard.created', 'DESC')
      .leftJoin('placard.users', 'users')
      .addSelect('users.uid')
      .getMany();
    return result.filter((item) => !item?.users?.find((u) => u.uid === uid));
  }
}
