import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStorageServiceService {

  user;
  setData (token:string,full_name:string,email:string,user_id:string){

    window.sessionStorage.setItem('token',token);
    window.sessionStorage.setItem('full_name',full_name);
    window.sessionStorage.setItem('email',email);
    window.sessionStorage.setItem('user_id',user_id);
  }
  getData(){
    const allData=[];
    let abc={
      full_name:window.sessionStorage.getItem('full_name'),
      email:window.sessionStorage.getItem('email'),
      user_id:window.sessionStorage.getItem('user_id')
    }
    allData.push(abc)
    return allData;

  }
  getToken(){
    return window.sessionStorage.getItem('token');
    //this.admin=window.sessionStorage.getItem('token');
  }

  destroyToken(){
    window.sessionStorage.clear();
  }
}

