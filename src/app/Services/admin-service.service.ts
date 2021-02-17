import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AdminClass, AdminLoginClass} from './../Class/admin-class';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

routeUrl="https://nodeprojectapi.herokuapp.com/register";
routerUrl="https://nodeprojectapi.herokuapp.com/login";

  constructor(private http: HttpClient) { }

  createAdminRegister(adminRegisterData):Observable<AdminClass[]>{
    return this.http.post<AdminClass[]>(this.routeUrl,adminRegisterData)
    .pipe(catchError(this.errorHandler))}

    createAdminLogin(adminLoginData):Observable<AdminLoginClass[]>{
      return this.http.post<AdminLoginClass[]>(this.routerUrl,adminLoginData)
      .pipe(catchError(this.errorHandler))}
  

    errorHandler(error:HttpErrorResponse){
      return throwError(error);
    }
  }