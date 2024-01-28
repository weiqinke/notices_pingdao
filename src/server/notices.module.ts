import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticeEntity } from 'src/entitys/notice.entity';
import { PlacardEntity } from 'src/entitys/placard.entity';
import { UserEntity } from 'src/entitys/user.entity';
import { NoticesController } from './notices.controller';
import { NoticesService } from './notices.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: '12345678',
      database: 'test',
      entities: [NoticeEntity, PlacardEntity, UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [NoticesController],
  providers: [NoticesService],
})
export class NoticeModule {}
