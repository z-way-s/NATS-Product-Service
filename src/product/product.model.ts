import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  gallery: {
    type: [String],
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
  discount: {
    type: Number,
    default: 0,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: false,
  },
  brand: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: [String],
    default: [],
  },
  stock: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export interface ProductModel extends Product, mongoose.Document {
  id: string;
}
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  gallery: string[];
  createdAt: Date;
  discount: number;
  category: string;
  subcategory: string;
  brand: string;
  rating: number;
  reviews: string[];
  stock: number;
  isActive: boolean;
  isDeleted: boolean;
}

export type Type =
  | 'title'
  | 'price'
  | 'description'
  | 'image'
  | 'gallery'
  | 'createdAt'
  | 'discount'
  | 'category'
  | 'subcategory'
  | 'brand'
  | 'rating'
  | 'reviews'
  | 'stock'
  | 'isActive'
  | 'isDeleted';
