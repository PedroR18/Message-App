import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-pic',
  templateUrl: './user-pic.component.html',
  styleUrls: ['./user-pic.component.scss'],
})
export class UserPicComponent implements OnInit {
  @Input() pic = '';
  @Input() status = '';
  @Input() active = false;

  constructor() {}

  ngOnInit(): void {}
}
