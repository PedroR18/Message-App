import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setting-row',
  templateUrl: './setting-row.component.html',
  styleUrls: ['./setting-row.component.scss'],
})
export class SettingRowComponent implements OnInit {
  @Input() title = '';
  image = '';

  constructor() {}

  ngOnInit(): void {
    this.image = 'assets/' + this.title.replace(/ /g, '') + '.png';
  }
}
