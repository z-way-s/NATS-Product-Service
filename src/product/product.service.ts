import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './create-product.dto';
import { Product, ProductModel } from './product.model';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel('product') private readonly productModel: Model<ProductModel>,
  ) {}
  getProducts(): string {
    return 'This action returns all products';
  }

  async createProduct(product: CreateProductDto): Promise<Product> {
    let newProduct;
    try {
      newProduct = await new this.productModel(product);
    } catch (error) {
      console.log(error);
    }
    if (!newProduct) {
      throw new Error('Error creating product');
    }
    const result = await newProduct.save();
    return {
      id: result.id,
      title: result.title,
      price: result.price,
      description: result.description,
      image: result.image,
      gallery: result.gallery,
      createdAt: result.createdAt,
      discount: result.discount,
      category: result.category,
      subcategory: result.subcategory,
      brand: result.brand,
      rating: result.rating,
      reviews: result.reviews,
      stock: result.stock,
      isActive: result.isActive,
      isDeleted: result.isDeleted,
    };
  }
}
