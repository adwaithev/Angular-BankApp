import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your banking partner"
  username = "Please enter your username"
  acno = ""
  pswd = ""


  user: any = {
    1000: { acno: 1000, uname: "akhil", password: "userone", balance: 3000 },
    1001: { acno: 1001, uname: "aahan", password: "usertwo", balance: 1000 }
  }

  constructor() { }


  accChange(event: any) {

    this.acno = event.target.value

  }

  pswdChange(event: any) {
    this.pswd = event.target.value

  }
  logIn() {
    var acno = this.acno;
    var pswd = this.pswd;
    var accDetails = this.user;
    if (acno in accDetails) {
      if (pswd == accDetails[acno]["password"])
        alert("login succesful")
      else {
        alert("incorrect password")
      }

    } else {
      alert("invalid user")
    }

  }

  ngOnInit(): void {
  }

}
