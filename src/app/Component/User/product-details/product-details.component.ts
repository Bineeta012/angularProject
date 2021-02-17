import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { UserStorageServiceService } from 'src/app/Services/user-storage-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData;
  productDetails;
    constructor(private srv:ProductServiceService, private storage:UserStorageServiceService,
    private router:Router, private activeRoute:ActivatedRoute ) { }
  
    ngOnInit(){
      this.activeRoute.params.subscribe((pId)=>{
      console.log(pId);
      this.srv.getProductData().subscribe((data)=>{
      this.productData=data;
      console.log(this.productData);
      this.productDetails=this.productData.filter((obj)=>{
        return obj.id==pId.id;
      })
      console.log(this.productDetails);
    })
  })
  }
  logout(){
    this.storage.destroyToken();
    this.router.navigate(['/userLogin'])
  }
}
