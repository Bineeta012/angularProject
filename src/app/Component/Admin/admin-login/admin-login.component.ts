import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import { AdminStorageServiceService } from 'src/app/Services/admin-storage-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm:FormGroup;

  hide=true;
  loginData;
  errBlock;
  constructor(private fb:FormBuilder, private srv:AdminServiceService,
    private storage:AdminStorageServiceService, private router:Router) { }

  ngOnInit(){
    this.adminLoginForm=this.fb.group({
      email:[null,[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password:[null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')]]
    })
  }
 adminLoginData(){
  let adminLoginData=this.adminLoginForm.value;
  
  this.srv.createAdminLogin(adminLoginData).subscribe((data)=>{
    this.loginData=data;
    this.storage.setData(this.loginData.data.token,this.loginData.data.lastname,this.loginData.data.firstname,this.loginData.data.adminId)
    console.log(this.loginData)
    alert("Login Succsessul!!")
    this.router.navigate(['/products'])
 },
 (err)=>{
   this.errBlock=err;
   alert('Invalid email or password!!!')
 }
 )
 }
//  logout(){
//   this.storage.destroyToken();
//   this.router.navigate(['/adminLogin'])
// }
}
