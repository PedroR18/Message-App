import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Contact, Message } from 'interfaces';
import data from '../../assets/data.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnChanges {
  @Input() active = '';
  @Output() detailsEvent = new EventEmitter<boolean>();

  setDetails(state: boolean) {
    this.detailsEvent.emit(state);
  }

  contact: Contact = {
    name: '',
    bio: '',
    pic: '',
    status: '',
    id: '',
    chat: [],
  };

  contacts: Contact[];

  shared: Message[] = [];

  activeImg = '';

  setActiveImg(str: string) {
    this.activeImg = str;
  }

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

  setShared(): Message[] {
    let shared: Message[] = [];

    this.contact.chat.forEach((message) => {
      if (message.type === 'media') {
        shared.push(message);
      }
    });

    return shared;
  }

  constructor() {
    this.contacts = data[0];
  }

  ngOnChanges(): void {
    this.contact = this.setContact(this.active);
    this.shared = this.setShared();
  }
}
