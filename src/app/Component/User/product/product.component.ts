import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { UserStorageServiceService } from 'src/app/Services/user-storage-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData;
  searchText;
    constructor(private srv:ProductServiceService, private storage:UserStorageServiceService,
    private router:Router) { }
  
    ngOnInit(){
      this.srv.getProductData().subscribe((data)=>{
      this.productData=data;
      console.log(this.productData);
    })}
    logout(){
      this.storage.destroyToken();
      this.router.navigate(['/userLogin'])
    }
  }
