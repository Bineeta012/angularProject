import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(sessionStorage.getItem('adminToken')!=null){
        return true;
      }
      else{
        alert("You are not logged in!!! Login First!!!")
        this.router.navigate(['/adminLogin'], {queryParams: {returnUrl:state.url}});
        return false;
      }
  }
  
}
