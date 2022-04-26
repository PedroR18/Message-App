import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'talkto';

  activeChat = '0';
  page = 'home';

  details = window.innerWidth > 1500 ? true : false;
  menu = window.innerWidth > 1100 ? true : false;
  contacts = window.innerWidth > 850 ? true : false;

  width = window.innerWidth;

  setMenu(state: boolean) {
    this.menu = state;
  }

  setContacts(state: boolean) {
    this.contacts = state;
  }

  setDetails(state: boolean) {
    this.details = state;
  }

  setPage(str: 'home' | 'settings' | 'user') {
    this.page = str;
  }

  setActiveChat(active: string) {
    this.activeChat = active;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.width = window.innerWidth;
    window.innerWidth < 1500
      ? (this.details = false)
      : this.details
      ? (this.details = true)
      : (this.details = false);
    window.innerWidth < 1100
      ? (this.menu = false)
      : this.menu
      ? (this.menu = true)
      : (this.menu = false);
    window.innerWidth < 850 ? (this.contacts = false) : (this.contacts = true);
  }
}
