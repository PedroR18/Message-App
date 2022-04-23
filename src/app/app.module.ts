import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserPicComponent } from './user-pic/user-pic.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { DetailsComponent } from './details/details.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserPicComponent,
    MenuBarComponent,
    ContactsComponent,
    MessageBoardComponent,
    DetailsComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
