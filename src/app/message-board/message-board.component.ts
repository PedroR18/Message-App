import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Contact } from '../../../interfaces';
import data from '../../assets/data.json';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss'],
})
export class MessageBoardComponent implements OnChanges {
  @Input() active = '';

  contact: Contact = {
    name: '',
    bio: '',
    pic: '',
    status: '',
    id: '',
    chat: [],
  };

  contacts: Contact[];

  setContact(id: string): Contact {
    let activeContact = {
      name: '',
      bio: '',
      pic: '',
      status: '',
      id: '',
      chat: [],
    };

    this.contacts.forEach((contact) => {
      if (contact.id === id) {
        // @ts-ignore
        activeContact = contact;
      }
    });

    return activeContact;
  }

  constructor() {
    this.contacts = data[0];
  }

  ngOnChanges(): void {
    this.contact = this.setContact(this.active);
  }
}
