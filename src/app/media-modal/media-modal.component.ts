import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss'],
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
