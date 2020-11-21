import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginInComponent } from './sigin-in/sigin-in.component';
import { SiginUpComponent } from './sigin-up/sigin-up.component';
import { ComfirmSignupComponent } from './comfirm-signup/comfirm-signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ChatTopComponent } from './chat-top/chat-top.component';
import { ChatBaseComponent } from './chat-base/chat-base.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FiltermsgPipe } from './pipes/filtermsg.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SiginInComponent,
    SiginUpComponent,
    ComfirmSignupComponent,
    SidebarComponent,
    ChatPageComponent,
    ChatTopComponent,
    ChatBaseComponent,
    FilterPipe,
    FiltermsgPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
