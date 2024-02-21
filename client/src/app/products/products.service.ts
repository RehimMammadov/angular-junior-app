import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { Observable, of } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: "Audi",
      image: "https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png"
    },
    {
      id: 2,
      name: "Porsche",
      image: "https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png"
    },
    {
      id: 3,
      name: "Mercedes-benz",
      image: "https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png"
    },
    {
      id: 4,
      name: "BMW",
      image: "https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png"
    },
    {
      id: 5,
      name: "Volkswagen",
      image: "https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png"
    }
  ]

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
  constructor() { }
}
