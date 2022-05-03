import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Item } from '../../../Common/dto';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getItems(@Req() req: any): Promise<Item[]> {
    return this.itemService.getItems();
  }

  @Post()
  async add(@Req() req: any, @Body() item: Item): Promise<Item> {
    return this.itemService.addItem(item);
  }

  @Put(':id')
  async update(
    @Req() req: any,
    @Param('id') id: number,
    @Body() item: Item,
  ): Promise<Item> {
    return this.itemService.updateItem(item);
  }

  @Delete(':id')
  async delete(@Req() req: any, @Param('id') id: number): Promise<Item> {
    return this.itemService.deleteItem(id);
  }
}
