import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() for data sharing from parent to child
  @Input() inputFromParent: string = "";

  //Mehod:4
  message:string="";
  constructor(private appService:AppService){
    
  }
  
  ngOnInit(): void {
    // debugger;
    this.appService.getMessage.subscribe(msg => this.message = msg);
    console.log(this.message);

    this.detectChanges();
  }

  // @Output() for data sharing from child to parent
  name: string = "This is for parent from child !!!!";  
  @Output() updatedName = new EventEmitter <string> (); 
  PostData() {  
      this.updatedName.emit(this.name);  
  }
  //----------new
  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
  password: new FormControl()
})
loginUser() {
debugger;
  //this.appService.setMessage('This is updated msg from test compoenent.');

  console.log(this.loginForm.status);
  console.log(this.loginForm.value);
  console.log(this.loginForm.value.email);

  this.appService.setMessage(this.loginForm.value.email);


}


detectChanges() {
  // Fires on each form control value change
  this.loginForm.valueChanges.subscribe(res => {
    // Variable res holds the current value of the form
    //debugger;
    //this.appService.setMessage(this.loginForm.value.email);
    this.appService.setChFormVal(this.loginForm.value);

    //this.cu/rren/tValue = res;
  });
}

}

