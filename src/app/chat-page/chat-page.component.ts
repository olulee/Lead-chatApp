import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(public chatService : ChatService) { }
  public path = '../../assets/user.png'
  public contacts = []
  public active
  public message
  public sentItem=[]
  public reciever
  public sent =[]
  public filterContact
  public searchMsg
  ngOnInit(): void {
    let contactList = this.chatService.getContact()
    this.active = this.chatService.getLogin()
    this.contacts = contactList.filter(c=>c.number!==this.active.number)
    console.log(this.contacts)
    let messages = this.chatService.getMessage();
    let myMessages = messages.filter(m =>m.senderId == this.active.number || m.reciever == this.active.number);

    // console.log(myMessages, "My messages")
    this.contacts.map(contact => {
      let ourMessage = myMessages.filter(m => m.senderId == contact.number || m.reciever == contact.number);
      let recentMessage = ourMessage[ourMessage.length - 1];
      if(recentMessage){
        contact.recentMessage = recentMessage.message;
      }else{
        contact.recentMessage = "No recent message";
      }
    })
    // messages
    // this.contacts.map((m,i)=>{
    //   let lastMsg = m.number == this.sent[i].reciever
    //   console.log(lastMsg)
    // })

  }
  pickContact(number){
    // this.reciever = number
    this.chatService.contact.next(number);
    let msg = this.chatService.getMessage()
    // console.log(msg)
    this.sent = msg.filter(m=>m.senderId == this.active.number && m.reciever == number || (m.senderId==number && m.reciever ==this.active.number))
    console.log(this.sent)
    this.sent.map(each=> {
      if(each.senderId==this.active.number){
        each.check=true
      }
      else{
        each.check=false
        each.seen=true
      }
    //   if (each.reciever == this.active.number) {
    //     each.seen = 'green'
    //   }
    })
    let rec=this.active.number
    console.log(this.sent)
    let arrs=[]
msg.forEach(
  function(m){
if( m.senderId == rec && m.reciever == number || (m.senderId==number && m.reciever ==rec) ){
arrs.push(m)
arrs.map(
  each=>{
    if(each.senderId==number){
      each.seen=true
    }
  }
)
}

  }
)
localStorage.messages=JSON.stringify(msg)


  }
  sendMessage(){
    // console.log(this.reciever)
    if (localStorage.hasOwnProperty('messages')) {
      this.sentItem = JSON.parse(localStorage.getItem('messages'))
    }
    let time = new Date()
    let m = time.getMinutes()
    let h = time.getHours()
    let chatTime = `${h}:${m}`
    this.chatService.contact.subscribe(recipient=>{
      this.reciever = recipient;
    })
    let item ={senderId:this.active.number,message:this.message,reciever:this.reciever,
    time:chatTime, check:true};
    this.sentItem.push(item);
    this.message =''
    localStorage.setItem('messages',JSON.stringify(this.sentItem))
    this.sentItem = JSON.parse(localStorage.getItem('messages'))
    this.chatService.senderMessage.next(this.sentItem)
    this.chatService.senderMessage.subscribe(m=>{
      this.sent = m.filter(m=>m.senderId == this.active.number && m.reciever == this.reciever || (m.senderId==this.reciever && m.reciever ==this.active.number))
      console.log(this.sent)
    })
    this.sent.map(each=> {
      if(each.senderId==this.active.number){
        each.check=true
      }
      else{
        each.check=false
      }
    })
    console.log(this.sent)

    // this.chatService.saveMessage(this.sentItem)
    // localStorage.setItem('messages',JSON.stringify(this.sentItem))
    // console.table(item)
    // console.table(this.active)
  }



}
