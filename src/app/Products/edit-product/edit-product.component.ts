import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId: any;
  product: Product = {
    id: 0,
    name: '',
    description: '',
    category: '',
    quantity: 0,
    price: 0
  };

  constructor(private actRoute: ActivatedRoute, private productService: ProductService, private router:Router) {}

  ngOnInit(): void {
    this.productId = this.actRoute.snapshot.paramMap.get('id');
    // console.log(this.productId);
    this.getProductDetails();
  }

  getProductDetails(): void {
    this.productService.getProductById(this.productId).subscribe(
      (product: Product) => {
        this.product= product;
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  getFormData(productData: any): void {

    setTimeout(()=>{
      this.productService.editProduct(this.product) 
    .subscribe(
      (updatedProduct: Product) => {
        console.log('Product updated:', updatedProduct);
        this.router.navigate(['/home']);
        alert("Product Updated Successfully")
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  },1000)

    console.log(this.product, "This is EditComponent")
  
  }
}
