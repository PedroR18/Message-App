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

  toggleMenu() {
    this.menuEmitter.emit(!this.menu);
  }

  toggleOptionsMenu() {
    this.Optionsmenu = !this.Optionsmenu;
  }

  constructor() {}

  ngOnInit(): void {}
}
