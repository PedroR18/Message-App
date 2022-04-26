import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  Optionsmenu = false;
  @Input() menu = true;
  @Output() menuEmitter = new EventEmitter<boolean>();
  @Output() pageEmitter = new EventEmitter<'home' | 'user' | 'settings'>();

  setPage(str: 'home' | 'user' | 'settings') {
    this.pageEmitter.emit(str);
  }

  toggleMenu() {
    this.menuEmitter.emit(!this.menu);
  }

  toggleOptionsMenu() {
    this.Optionsmenu = !this.Optionsmenu;
  }

  constructor() {}

  ngOnInit(): void {}
}
