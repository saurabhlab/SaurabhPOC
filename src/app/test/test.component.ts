import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { LoginForm } from '../Modal/LoginForm';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParentData } from '../Modal/ParentData';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  parentForm = new FormGroup({
    name: new FormControl(null, Validators.required)
  })

  loginormData: any;

  callApi(data: ParentData) {
    console.log("Api called", data);
  }

  data: ParentData = {};
  parentSave() {
    this.appService.getChFormVal.subscribe(msg => {
      this.loginormData = msg;
    }
    );
    this.data = {
      Name: this.parentForm.value.name,
      loginForm: this.loginormData
    }

    this.callApi(this.data)

  }

}
