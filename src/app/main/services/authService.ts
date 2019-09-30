import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class Auth implements CanActivate {
  constructor(private route: Router) {
  }

  canActivate() {
    return sessionStorage.getItem('user')
      ? true
      : (this.route.navigate(['/login']), false);
  }
}
