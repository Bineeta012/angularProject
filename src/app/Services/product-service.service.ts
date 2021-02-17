import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ShowProduct } from './../Class/show-product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

routeUrl='https://fakestoreapi.com/products';

  constructor(private http:HttpClient) { }

  getProductData():Observable<ShowProduct[]>{
    return this.http.get<ShowProduct[]>(this.routeUrl)
    .pipe(catchError(this.errorHandler))
  }
  addProductData(productData):Observable<ShowProduct[]>{
    return this.http.post<ShowProduct[]>(this.routeUrl,productData)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
