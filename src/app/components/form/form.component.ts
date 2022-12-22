import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'Register User';
  msm = '';
  flag = false;
  public name:string = 'Pepi';
  public users:Array<any> = [];

  constructor(){
    this.users = [
      {name : "Anderson", lastName: "Garces"},
      {name : "Mateo", lastName: "Garces"},
      {name : "Gustavo", lastName: "Garces"}
    ];
  }



  registerUser(){
    this.flag = true;
    this.msm = 'User register successfuly';
  }
}
