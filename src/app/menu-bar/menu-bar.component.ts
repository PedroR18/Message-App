import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Input() page = '';
  @Input() width = window.innerWidth;
  @Input() visible = true;
  @Output() pageEmitter = new EventEmitter<'home' | 'user' | 'settings'>();
  @Output() visibleEmitter = new EventEmitter<false>();
  @Output() visibleContactsEmitter = new EventEmitter<true>();

  setPage(str: 'home' | 'user' | 'settings') {
    this.pageEmitter.emit(str);
    if (this.width < 1100) {
      this.setVisible();
    }
  }

  setVisible() {
    this.visibleEmitter.emit(false);
  }

  setVisibleContacts() {
    this.visibleContactsEmitter.emit(true);
    this.setPage('home');
  }

  constructor() {}

  ngOnInit(): void {}
}
