import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public chatService:ChatService) { }
  public contacts = []
  ngOnInit(): void {
    this.contacts = this.chatService.getContact()
    console.log(this.contacts)
    console.log('hhfh')
  }

}
