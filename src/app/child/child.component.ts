import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {    
    this.detectChanges();
  }

  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl()
  })
  loginUser() {
    
    //console.log(this.loginForm.value.email);
    this.appService.setChFormVal(this.loginForm.value);
  }

  detectChanges() {
    // Fires on each form control value change
    this.loginForm.valueChanges.subscribe(res => {    
      this.appService.setChFormVal(this.loginForm.value);
    });
  }

}

