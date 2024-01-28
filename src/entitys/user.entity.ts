import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlacardEntity } from './placard.entity';

@Entity('user')
export class UserEntity {
  //自增键
  @PrimaryGeneratedColumn({
    comment: '自增id',
  })
  id: number;

  @Index({ unique: true })
  @Column({
    comment: '雪花算法出来的int 64位',
    type: 'bigint',
    readonly: true,
  })
  uid: string;

  @Column({
    comment: '是否删除，0是使用中，1是已删除',
    default: 0,
  })
  isdeleted: number;

  @ManyToMany(() => PlacardEntity, (placards) => placards.users)
  placards: PlacardEntity[];
}
