import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() img = '';
  @Output() imgEventEmitter = new EventEmitter<string>();

  resetImg() {
    this.imgEventEmitter.emit('');
  }

  constructor() {}

  ngOnInit(): void {}
}
