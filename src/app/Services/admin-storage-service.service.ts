import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminStorageServiceService {
  admin;
  setData (token:string,lastname:string,firstname:string,adminId:string){

    window.sessionStorage.setItem('adminToken',token);
    window.sessionStorage.setItem('firstname',firstname);
    window.sessionStorage.setItem('lastname',lastname);
    window.sessionStorage.setItem('adminId',adminId);
  }
  getData(){
    const allData=[];
    let abc={
      firstname:window.sessionStorage.getItem('firstname'),
      lastname:window.sessionStorage.getItem('lastname'),
      adminId:window.sessionStorage.getItem('adminId')
    }
    allData.push(abc)
    return allData;

  }
  getToken(){
    return window.sessionStorage.getItem('adminToken');
    //this.admin=window.sessionStorage.getItem('token');
  }

  destroyToken(){
    window.sessionStorage.clear();
  }
}
