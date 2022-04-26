import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  @Output() pageEmitter = new EventEmitter<'home' | 'user' | 'settings'>();

  setPage(str: 'home' | 'user' | 'settings') {
    this.pageEmitter.emit(str);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
