import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin-in',
  templateUrl: './sigin-in.component.html',
  styleUrls: ['./sigin-in.component.css']
})
export class SiginInComponent implements OnInit {

  constructor(public route:Router) { }
  public userName
  public email
  public password
  public users = []
  public loginStatus=true
  ngOnInit(): void {

  }
  login(){
    let a = localStorage.hasOwnProperty('chatusers')
    if (a) {
      this.users = JSON.parse(localStorage.getItem('chatusers'))
    }
    // console.log(this.users)
    let checkLogin = this.users.find(u=>u.userName == this.userName && u.password ==
      this.password);
      console.log(checkLogin)
      if (checkLogin) {
        checkLogin.status=true
        // console.log(checkLogin)
        sessionStorage.setItem('loginstatus', JSON.stringify(checkLogin))
        this.route.navigate([`/chatpage`])


      }else{
        this.loginStatus = false
        // console.log(this.loginStatus)
      }



  }

}
