import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {LoginForm } from './Modal/LoginForm'

@Injectable({
  providedIn: 'root'
})


export class AppService { 

  private chForm  = new BehaviorSubject<LoginForm>({} as LoginForm);
  getChFormVal = this.chForm.asObservable();

  setChFormVal(frmVal:LoginForm){
        this.chForm.next(frmVal);
  }
}
