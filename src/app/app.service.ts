import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {LoginForm } from './Modal/LoginForm'

@Injectable({
  providedIn: 'root'
})


export class AppService {
 
  
  private message = new BehaviorSubject<string>('Initial message!!!');
  getMessage = this.message.asObservable();
 
  constructor() {  }

  setMessage(message: string) {
    this.message.next(message)
  }


  //-----new

  private chForm  = new BehaviorSubject<LoginForm>({} as LoginForm);
  getChFormVal = this.chForm.asObservable();

  setChFormVal(frmVal:LoginForm){
        this.chForm.next(frmVal);
  }
}
