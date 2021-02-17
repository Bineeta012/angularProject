import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  adminRegisterForm:FormGroup;

  registerData;
  errBlock;
  hide=true;
  
  constructor(private fb:FormBuilder, private srv:AdminServiceService,
    private router:Router) { }

  ngOnInit(){
    this.adminRegisterForm=this.fb.group({
      fname:[null,[Validators.required,Validators.minLength(5)]],
      lname:[null,[Validators.required,Validators.minLength(5)]],
      email:[null,[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password:[null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')]]
    })
  }
 adminRegisterData(){
  let adminRegisterData=this.adminRegisterForm.value;
  
  this.srv.createAdminRegister(adminRegisterData).subscribe((data)=>{
    this.registerData=data;
    console.log(this.adminRegisterForm.value)
    alert("Resitration Successfull!!")
    this.router.navigate(['/adminLogin']);
 },
 (err)=>{
   this.errBlock=err;
 }
 )}
}
