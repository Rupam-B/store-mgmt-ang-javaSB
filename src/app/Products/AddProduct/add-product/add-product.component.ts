import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  newProduct: Product = {
    productId: 0,
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    category: ''
  };

  userId: any; 

  constructor(private productService: ProductService, private router: Router) {
    this.userId = localStorage.getItem("Store_mgmt_userId")
  }

  getProduct(prod: any) {
    if (prod.ProductName && prod.ProductDescription && prod.ProductCategory && prod.ProductQuantity && prod.ProductPrice) {
      this.newProduct.name = prod.ProductName;
      this.newProduct.description = prod.ProductDescription;
      this.newProduct.category = prod.ProductCategory;
      this.newProduct.quantity = prod.ProductQuantity;
      this.newProduct.price = prod.ProductPrice;

      this.addProduct();
    } else {
      alert('Please Fill all Details');
    }
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct, this.userId).subscribe(
      (data: Product) => {
        // Navigate back to home or wherever you want after successfully adding the product
        this.router.navigate(["home"]);

        // Optionally clear the form after successful submission
        this.newProduct = {
          productId: 0,
          name: '',
          price: 0,
          quantity: 0,
          description: '',
          category: ''
        };
      },
      (error) => {
        console.error('There was an error adding the product!', error);
      }
    );
  }
}
