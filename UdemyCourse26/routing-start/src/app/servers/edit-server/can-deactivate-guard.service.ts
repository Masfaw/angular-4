import {Observable} from "rxjs/Observable";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {promise} from "selenium-webdriver";

export interface CanComponentDeactivate {
  canDeactivate : ()=> Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component : CanComponentDeactivate,
                currentRout : ActivatedRouteSnapshot,
                currentState : RouterStateSnapshot,
                nextState? : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {


    return component.canDeactivate();
  }
}
