import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductSql } from './products-sql.model';
import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsSqlService {
    constructor(@InjectRepository(ProductSql) 
    private productsRepository: Repository<ProductSql>) {

     }

   async insertProduct(title: string, desc: string, price: number): Promise<InsertResult> {
        const prodId = Math.random().toString();
        const newProduct = new ProductSql();
        newProduct.title = title;
        newProduct.description = desc;
        newProduct.price = price;
        return await this.productsRepository.insert(newProduct);
    }

    findAll(): Promise<ProductSql[]> {
        return this.productsRepository.find();
    }

    findOne(id: string): Promise<ProductSql> {
        return this.productsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.productsRepository.delete(id);
    }
}
