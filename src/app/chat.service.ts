import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  public contact = new BehaviorSubject(Number)
  public senderMessage = new BehaviorSubject([])
  getLogin(){
    return JSON.parse(sessionStorage.getItem('loginstatus'))
  }
  getContact(){
    return JSON.parse(localStorage.getItem('chatusers'))
  }
  getMessage(){
    return JSON.parse(localStorage.getItem('messages'))
  }
  saveMessage(message){
console.log(message)
    localStorage.setItem('messages',JSON.stringify(message))

  }
}
