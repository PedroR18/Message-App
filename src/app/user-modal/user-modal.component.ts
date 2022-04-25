import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  @Output() pageEmitter = new EventEmitter<'home'>();

  closeModal() {
    this.pageEmitter.emit('home');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
