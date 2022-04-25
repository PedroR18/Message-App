import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menu = false;

  toggleMenu() {
    this.menu = !this.menu;
  }

  constructor() {}

  ngOnInit(): void {}
}
