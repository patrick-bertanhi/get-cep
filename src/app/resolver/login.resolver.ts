import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';
import { BehaviorService } from '../behavior.service';

@Injectable()
export class LoginResolver implements Resolve<boolean> {
  constructor(private router: Router,  private behaviorService: BehaviorService) {}

  resolve(): any {
    this.behaviorService.auth.subscribe(aut => {
      if (aut) {
        return true;
      } else {
        return this.router.navigate(['../login']);
      }
    });
  }
}