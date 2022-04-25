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
import { ModalComponent } from './modal/modal.component';
import { MenuComponent } from './details-menu/details-menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';
import { UserModalComponent } from './user-modal/user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserPicComponent,
    MenuBarComponent,
    ContactsComponent,
    MessageBoardComponent,
    DetailsComponent,
    ContactCardComponent,
    ModalComponent,
    MenuComponent,
    UserMenuComponent,
    SettingsModalComponent,
    UserModalComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
