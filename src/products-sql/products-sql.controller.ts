import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { ProductsSqlService } from './products-sql.service';

@Controller('sql/products')
export class ProductsSqlController {
  constructor(private readonly productsSqlService: ProductsSqlService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = await this.productsSqlService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productsSqlService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsSqlService.findOne(prodId);
  }

  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
      await this.productsSqlService.remove(prodId);
      return null;
  }
}
