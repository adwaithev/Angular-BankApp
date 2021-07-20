import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your banking partner"
  username = "Please enter your account number"
  password = "Please enter your password"
  acno = ""
  pswd = ""


  user: any = {
    1000: { acno: 1000, uname: "akhil", password: "userone", balance: 3000 },
    1001: { acno: 1001, uname: "aahan", password: "usertwo", balance: 1000 }
  }

  constructor() { }



  logIn(a: any, p: any) {
    var acno = a.value;
    var pswd = p.value;
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
