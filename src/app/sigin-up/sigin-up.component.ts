import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin-up',
  templateUrl: './sigin-up.component.html',
  styleUrls: ['./sigin-up.component.css']
})
export class SiginUpComponent implements OnInit {

  constructor(public route:Router) { }
public userId =0
public name
public email
public number = 0
public address
public userName
public password
public file
public user = []
public picture
public profileImg
public checkImg =false
  ngOnInit(): void {
  }

  siginUp(){
    if (localStorage.hasOwnProperty('chatusers')) {
      this.user = JSON.parse(localStorage.getItem('chatusers'))
  }
    let newfile = this.file.split("fakepath")
    let path =  newfile[1].split('\\')
    this.picture = path[1]
    let time = new Date()
    if (this.user.length==0) {

      let userDetail = {id:this.userId,name:this.name, email:this.email,
        number:this.number,address:this.address,userName:this.userName,
        password:this.password,file:this.profileImg,time:time.toDateString(),status:false}
        this.user.push(userDetail)
        localStorage.setItem('chatusers',JSON.stringify(this.user))
        console.log(this.user)
    }else{
      let id = this.user[this.user.length-1].id
      let userDetail = {id:id++,name:this.name, email:this.email,
        number:this.number,address:this.address,userName:this.userName,
        password:this.password,file:this.profileImg,time:time.toDateString(),status:false}
        this.user.push(userDetail)
        localStorage.setItem('chatusers',JSON.stringify(this.user))
        console.log(this.user)
    }
    this.route.navigate([`/successfull`])
  }
  myImg(){
    let img = this.file.split('\\')
    let n = img[img.length-1]
    console.log(n)
    this.profileImg = `/assets/${n}`
    this.checkImg = true
  }

}
