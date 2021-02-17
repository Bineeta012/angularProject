import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  hide=true;
  errBlock;
  registerData;
  userRegisterForm:FormGroup;
  constructor(private fb:FormBuilder, private srv:UserServiceService, private router:Router) { }

  ngOnInit(){
    this.userRegisterForm=this.fb.group({
      firstname:[null,[Validators.required,Validators.minLength(5)]],
      lastname:[null,[Validators.required,Validators.minLength(5)]],
      email:[null,[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password:[null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')]]
    })
  }
 userRegisterData(){
  let userRegisterData=this.userRegisterForm.value;
  
  this.srv.createUserRegister(userRegisterData).subscribe((data)=>{
    this.registerData=data;
    alert(this.registerData.message)
    console.log(this.registerData)
    this.router.navigate(['/userLogin'])
 },
 (err)=>{
   this.errBlock=err;
 }
 )}
}