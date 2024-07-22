import { Component } from '@angular/core';
import { OutStock } from 'src/app/models/OutStock.model';
import { OutStockService } from 'src/app/Services/out-stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-out-stock',
  templateUrl: './add-out-stock.component.html',
  styleUrls: ['./add-out-stock.component.css']
})
export class AddOutStockComponent {

  newOutStock : OutStock={
    outStockId:0,
    outStockName:'',
    outStockCategory:'',
    outStockDescription:'',
  }

  constructor (private stkService:OutStockService,private route:Router){}

  getAddOutStockData(data:any){
    if(data.outStockName&&data.outStockCategory&&data.outStockDescription){
      this.newOutStock.outStockName=data.outStockName
      this.newOutStock.outStockCategory=data.outStockCategory
      this.newOutStock.outStockDescription=data.outStockDescription


      this.addStkdata();
    } else {
      alert('Please Fill all Details');
    }
  }


  addStkdata():void{
    this.stkService.addOutOfStock(this.newOutStock).subscribe(
      ()=>{
          this.route.navigate(["/outStock"])
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  


}


