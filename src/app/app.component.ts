import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'talkto';

  activeChat = '0';

  setActiveChat(active: string) {
    this.activeChat = active;
  }
}
