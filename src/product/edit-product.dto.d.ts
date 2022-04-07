export interface EditProductDto {
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  gallery?: string[];
  createdAt?: Date;
  discount?: number;
  category?: string;
  subcategory?: string;
  brand?: string;
  rating?: number;
  reviews?: string[];
  stock?: number;
  isActive?: boolean;
  isDeleted?: boolean;
}
