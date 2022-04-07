import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';

@Controller()
export class ProductController {
  constructor(private productService: ProductService) {}

  @MessagePattern({ cmd: 'product.getAll' })
  getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @MessagePattern({ cmd: 'product.create' })
  createProduct(@Payload() payload: any): Promise<Product> {
    return this.productService.createProduct(payload.data);
  }
  @MessagePattern({ cmd: 'product.get' })
  getProduct(@Payload() payload: any): Promise<Product> {
    return this.productService.getProduct(payload.id);
  }

  @MessagePattern({ cmd: 'product.update' })
  updateProduct(@Payload() payload: any): Promise<Product> {
    return this.productService.updateProduct(payload.id, payload.data);
  }
}
