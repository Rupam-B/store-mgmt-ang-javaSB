import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : Product[]=[];

  fetchUserId : any;

  constructor (private productService:ProductService , private router:Router) {}

  ngOnInit(): void {
    
    this.loadProducts();
  }

  loadProducts():void{
    this.productService.getProducts().subscribe(
      (data : Product[]) =>{
        this.products=data;
        // console.log(data);
      },
      (error)=>{
        console.log('There was an error fetching the products!', error)
      }
    )
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(
        () => {
          // this.products = this.products.filter(product => product.id !== id);
          setTimeout(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['home']);
            });
          }, 500);
        },
        (error) => {
          console.error('There was an error deleting the product!', error);
          setTimeout(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['home']);
            });
          }, 500);
        }
      );
    }

}
}
