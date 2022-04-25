import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
})
export class SettingsModalComponent implements OnInit {
  @Output() pageEmitter = new EventEmitter<'home'>();

  closeModal() {
    this.pageEmitter.emit('home');
  }

  constructor() {}

  ngOnInit(): void {}
}
