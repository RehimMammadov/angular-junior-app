import { Component, OnInit } from '@angular/core';
import { Product } from './products.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: Product[]

  constructor(private productService: ProductsService) {}

  ngOnInit() {
      this.productService.getProducts().subscribe(products => {
        this.products = products
      })
  }
}
