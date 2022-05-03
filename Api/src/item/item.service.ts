import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../../../Common/dto';
import {
  ItemEntity,
  ItemEntitySetWithDto,
  ItemEntityToDto,
} from 'src/entities/Item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemRepo: Repository<ItemEntity>,
  ) {}
  async addItem(item: Item): Promise<Item> {
    var newItem: ItemEntity = {
      text: item.text,
      checked: false,
    };

    var newItemEntity = await this.itemRepo.save(newItem);
    return ItemEntityToDto(newItemEntity);
  }

  async updateItem(item: Item): Promise<Item> {
    var oldItem = await this.itemRepo
      .createQueryBuilder('item')
      .where('item.id = :id', { id: item.id })
      .getOne();

    if (!item) {
      throw new NotFoundException(`Item not found`);
    }

    oldItem = ItemEntitySetWithDto(oldItem, item);
    this.itemRepo.save(oldItem);

    return ItemEntityToDto(oldItem);
  }

  async getItems(): Promise<Item[]> {
    try {
      const items = await this.itemRepo.find();
      return items.map((item) => ItemEntityToDto(item));
    } catch (error) {
      throw error;
    }
  }

  async deleteItem(itemId: number): Promise<Item> {
    try {
      var item = await this.itemRepo
        .createQueryBuilder('item')
        .where('item.id = :id', { id: itemId })
        .getOne();

      if (!item) {
        throw new NotFoundException(`Item not found`);
      }

      this.itemRepo.delete({ id: item.id });

      return ItemEntityToDto(item);
    } catch (error) {
      throw error; // new InternalServerErrorException();
    }
  }
}
