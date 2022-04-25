import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Input() page = '';
  @Output() pageEmitter = new EventEmitter<'home' | 'user' | 'settings'>();

  setPage(str: 'home' | 'user' | 'settings') {
    this.pageEmitter.emit(str);
  }

  constructor() {}

  ngOnInit(): void {}
}
