import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { LoginForm } from '../Modal/LoginForm';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //Mehod:4
  message:string="";
  constructor(private appService:AppService){
    //this.appService.getMessage.subscribe(msg => this.message = msg);;
  }

  ngOnInit(): void {
  }

  loginormData : any;
callApi(val:LoginForm){
  console.log("callApi method called", val);
}

  updateMessage(val :boolean){
debugger

    this.appService.getChFormVal.subscribe(msg => 
     // alert("message from child in Parent:- Email:- " + msg.email +  "  & Password:- " + msg.password )
      // this.message = msg
      {
      console.log("message from child in Parent:- Email:- " + msg.email +  "  & Password:- " + msg.password );
      this.loginormData = msg;
      }
      );;

      if(val){
        this.callApi(this.loginormData) 
    }


    //this.appService.setMessage('This is updated msg from test compoenent.');
    
    // this.appService.getMessage.subscribe(msg => 
    //   alert("message from child:- " + msg)
    //   // this.message = msg
      
    //   );;


  }

}
