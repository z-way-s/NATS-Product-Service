import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './create-product.dto';
import { EditProductDto } from './edit-product.dto';
import { Product, ProductModel, Type } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('product') private readonly productModel: Model<ProductModel>,
  ) {}

  // Basic CRUD
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
  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      gallery: product.gallery,
      createdAt: product.createdAt,
      discount: product.discount,
      category: product.category,
      subcategory: product.subcategory,
      brand: product.brand,
      rating: product.rating,
      reviews: product.reviews,
      stock: product.stock,
      isActive: product.isActive,
      isDeleted: product.isDeleted,
    }));
  }

  async getProduct(id: string): Promise<Product> {
    let res;
    try {
      res = await this.productModel.findById(id);
    } catch (error) {
      throw new Error('Error getting product');
    }
    if (!res) {
      throw new Error('Error getting product');
    }
    return {
      id: res.id,
      title: res.title,
      price: res.price,
      description: res.description,
      image: res.image,
      gallery: res.gallery,
      createdAt: res.createdAt,
      discount: res.discount,
      category: res.category,
      subcategory: res.subcategory,
      brand: res.brand,
      rating: res.rating,
      reviews: res.reviews,
      stock: res.stock,
      isActive: res.isActive,
      isDeleted: res.isDeleted,
    };
  }

  async updateProduct(id: string, product: EditProductDto): Promise<Product> {
    let res;
    try {
      res = await this.productModel.findByIdAndUpdate(id, product, {
        new: true,
      });
    } catch (error) {
      throw new Error('Error updating product');
    }
    if (!res) {
      throw new Error('Error updating product');
    }
    return {
      id: res.id,
      title: res.title,
      price: res.price,
      description: res.description,
      image: res.image,
      gallery: res.gallery,
      createdAt: res.createdAt,
      discount: res.discount,
      category: res.category,
      subcategory: res.subcategory,
      brand: res.brand,
      rating: res.rating,
      reviews: res.reviews,
      stock: res.stock,
      isActive: res.isActive,
      isDeleted: res.isDeleted,
    };
  }
  async deleteProduct(id: string): Promise<Product> {
    let res;
    try {
      res = await this.productModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Error deleting product');
    }
    if (!res) {
      throw new Error('Error deleting product');
    }
    return {
      id: res.id,
      title: res.title,
      price: res.price,
      description: res.description,
      image: res.image,
      gallery: res.gallery,
      createdAt: res.createdAt,
      discount: res.discount,
      category: res.category,
      subcategory: res.subcategory,
      brand: res.brand,
      rating: res.rating,
      reviews: res.reviews,
      stock: res.stock,
      isActive: res.isActive,
      isDeleted: res.isDeleted,
    };
  }

  // Complex Functions

  async getByType(type: Type, value: string): Promise<Product[]> {
    let res;
    const query = {};
    query[type] = value;
    console.log(query);
    try {
      res = await this.productModel.find(query);
    } catch (error) {
      throw new Error('Error getting product');
    }
    if (!res) {
      throw new Error('Error getting product');
    }
    return res.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      gallery: product.gallery,
      createdAt: product.createdAt,
      discount: product.discount,
      category: product.category,
      subcategory: product.subcategory,
      brand: product.brand,
      rating: product.rating,
      reviews: product.reviews,
      stock: product.stock,
      isActive: product.isActive,
      isDeleted: product.isDeleted,
    }));
  }

  async getByRange(type: Type, min?: number, max?: number): Promise<Product[]> {
    let res;
    const query = {};
    if (min && max) {
      query[type] = { $gte: min, $lte: max };
    } else if (min) {
      query[type] = { $gte: min };
    } else if (max) {
      query[type] = { $lte: max };
    }
    query[type];
    console.log(query);
    try {
      res = await this.productModel.find(query);
    } catch (error) {
      throw new Error('Error getting product');
    }
    if (!res) {
      throw new Error('Error getting product');
    }
    return res.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      gallery: product.gallery,
      createdAt: product.createdAt,
      discount: product.discount,
      category: product.category,
      subcategory: product.subcategory,
      brand: product.brand,
      rating: product.rating,
      reviews: product.reviews,
      stock: product.stock,
      isActive: product.isActive,
      isDeleted: product.isDeleted,
    }));
  }
}
