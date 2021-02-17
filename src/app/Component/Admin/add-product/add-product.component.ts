import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminStorageServiceService } from 'src/app/Services/admin-storage-service.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
addProductForm:FormGroup;
imageSrc:string;
productData;
  constructor(private fb:FormBuilder,private srv:ProductServiceService,
    private storage:AdminStorageServiceService, private router:Router) { }

  ngOnInit(){
    this.addProductForm=this.fb.group({
      title: [null,Validators.required],
      price: [null,Validators.required],
      category: [null,Validators.required],
      description:[null,Validators.required],
      file: [null,Validators.required],
      fileSource: [null,Validators.required]
    })
  }
  addProduct(){
    let formData=this.addProductForm.value;
    this.srv.addProductData(formData).subscribe((data)=>{
      this.productData=data;
    console.log(this.productData);
  })}

  get f(){
    return this.addProductForm.controls;
  }
   
  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.addProductForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }}
  
  logout(){
    this.storage.destroyToken();
    this.router.navigate(['/adminLogin']);
  }
}
