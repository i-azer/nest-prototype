import { Module } from '@nestjs/common';
import { ProductsSqlController } from './products-sql.controller';
import { ProductsSqlService } from './products-sql.service';
import { ProductSql } from './products-sql.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSql])],
  controllers: [ProductsSqlController],
  providers: [ProductsSqlService],
})
export class ProductsSqlModule {}
