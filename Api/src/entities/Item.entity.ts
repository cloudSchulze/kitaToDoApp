import { Column, Entity } from 'typeorm';
import { Item } from '../../../Common/dto';
import { BaseEntity } from './Base.entity';
import moment = require('moment');

@Entity({ name: 'items' })
export class ItemEntity extends BaseEntity {
  @Column()
  text: string;

  @Column({ nullable: true })
  checked: boolean;
}

export function ItemEntityToDto(entity: ItemEntity): Item {
  return {
    id: entity.id,
    text: entity.text,
    checked: entity.checked,
  };
}

export function ItemEntitySetWithDto(
  entity: ItemEntity,
  item: Item,
): ItemEntity {
  entity.text = item.text;
  entity.checked = item.checked;
  entity.updatedAt = moment().toDate();
  return entity;
}
