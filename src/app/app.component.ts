import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'talkto';

  activeChat = '0';

  details = true;

  page = 'home';

  setPage(str: 'home' | 'settings' | 'user') {
    this.page = str;
  }

  setDetails(state: boolean) {
    this.details = state;
  }

  setActiveChat(active: string) {
    this.activeChat = active;
  }
}
