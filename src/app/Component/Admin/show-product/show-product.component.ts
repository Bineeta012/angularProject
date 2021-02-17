import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminStorageServiceService } from 'src/app/Services/admin-storage-service.service';
import {ProductServiceService} from './../../../Services/product-service.service'

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
productData;
searchText;
  constructor(private srv:ProductServiceService, private storage:AdminStorageServiceService,
  private router:Router) { }

  ngOnInit(){
    this.srv.getProductData().subscribe((data)=>{
    this.productData=data;
    console.log(this.productData);
  })}

  logout(){
    this.storage.destroyToken();
    this.router.navigate(['/adminLogin'])
  }
}
