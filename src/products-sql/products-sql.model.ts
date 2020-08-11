
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("ProductsTable")
export class ProductSql {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: true })
  price: number;
}