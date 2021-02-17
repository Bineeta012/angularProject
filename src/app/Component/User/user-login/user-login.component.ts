import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { UserStorageServiceService } from 'src/app/Services/user-storage-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
userLoginForm:FormGroup;
hide=true;
loginData;
errBlock;
  constructor(private fb:FormBuilder,private srv:UserServiceService,
    private storage:UserStorageServiceService,private router:Router) { }

  ngOnInit(){
      this.userLoginForm=this.fb.group({
        email:[null,[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        password:[null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')]]
      })
  }
  userLoginData(){
    let userLoginData=this.userLoginForm.value;
  
  this.srv.createUserLogin(userLoginData).subscribe((data)=>{
    this.loginData=data;
    
    this.storage.setData(this.loginData.token,this.loginData.full_name,
      this.loginData.email,this.loginData.user_id)
  alert(this.loginData.message);
  console.log(this.loginData)
  alert('Login Successful!!!')
  this.router.navigate(['/showProducts'])
  },
  (err)=>{
    this.errBlock=err;
    alert('Invalid email or password!!!')
  })}
}
