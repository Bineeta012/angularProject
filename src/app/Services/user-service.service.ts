import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserClass, UserLoginClass } from '../Class/user-class';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  routeUrl="https://api09.herokuapp.com/register";
  routerUrl="https://api09.herokuapp.com/login";
  
    constructor(private http: HttpClient) { }
  
    createUserRegister(userRegisterData):Observable<UserClass[]>{
      return this.http.post<UserClass[]>(this.routeUrl,userRegisterData)
      .pipe(catchError(this.errorHandler))}
  
      createUserLogin(userLoginData):Observable<UserLoginClass[]>{
        return this.http.post<UserLoginClass[]>(this.routerUrl,userLoginData)
        .pipe(catchError(this.errorHandler))}
    
      errorHandler(error:HttpErrorResponse){
        return throwError(error);
      }
    }
