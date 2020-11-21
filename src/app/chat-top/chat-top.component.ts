import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-top',
  templateUrl: './chat-top.component.html',
  styleUrls: ['./chat-top.component.css']
})
export class ChatTopComponent implements OnInit {

  constructor(public activeUser : ChatService) { }
  public active
  public contact=[]
  public selectedContact
  ngOnInit(): void {
    this.contact = this.activeUser.getContact()
    this.active = this.activeUser.getLogin()
    this.activeUser.contact.subscribe(c=>{
      this.selectedContact = this.contact.find(f=>f.number == c)
      console.log(this.selectedContact)
    })
  }

}
