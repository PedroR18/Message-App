import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() detailsEvent = new EventEmitter<boolean>();
  @Output() menuEvent = new EventEmitter();
  @Input() details = true;

  toggleDetails() {
    this.detailsEvent.emit(!this.details);
    this.menuEvent.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
