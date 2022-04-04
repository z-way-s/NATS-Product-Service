import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';

@Controller()
export class ProductController {
  constructor(private productService: ProductService) {}

  getProducts(): string {
    return this.productService.getProducts();
  }

  @MessagePattern({ cmd: 'product.create' })
  createProduct(@Payload() payload: any): Promise<Product> {
    return this.productService.createProduct(payload.data);
  }
}
