import { Component ,OnInit } from '@angular/core';
import { OutStock } from 'src/app/models/OutStock.model';
import { OutStockService } from 'src/app/Services/out-stock.service';


@Component({
  selector: 'app-out-of-stock',
  templateUrl: './out-of-stock.component.html',
  styleUrls: ['./out-of-stock.component.css']
})
export class OutOfStockComponent implements OnInit {

  outStock : OutStock []=[]

  constructor(private outStockService:OutStockService){}

  ngOnInit(): void {
      this.getallOutStocks();
  }


  getallOutStocks():void{
    this.outStockService.getOutStocks().subscribe(
      (data : OutStock[])=>{
        this.outStock = data;
        console.log(this.outStock)
      },
      (error)=>{
          console.log("Error Fetching Out Of Stocks", error)
      }
    )

  }



  delOutStock(id : number):void{
    if(confirm("Are you sure to remove product from out of stock?")){
      this.outStockService.removeOutStock(id).subscribe(
        ()=>{
          setTimeout(() => {
            window.location.reload();
          }, 500);
        },
        (error)=>{
          setTimeout(() => {
            window.location.reload();
          }, 500);
          console.log("Error Deleting Product from Out of Stock" , error)
        }
      )
    }
  }



}
