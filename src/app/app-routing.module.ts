import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiginUpComponent } from './sigin-up/sigin-up.component';
import { SiginInComponent } from './sigin-in/sigin-in.component';
import { ComfirmSignupComponent } from './comfirm-signup/comfirm-signup.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatBaseComponent } from './chat-base/chat-base.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:'', redirectTo:'/signup', pathMatch:'full'},
  {path:'signup', component:SiginUpComponent},
  {path:'signin', component:SiginInComponent},
  {path:'successfull', component:ComfirmSignupComponent},
  {path:'chat', component:ChatPageComponent},
  {path:'chatpage', component:ChatBaseComponent, canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
