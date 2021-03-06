import { Component, OnInit, Input } from '@angular/core';
import { Contact, Message } from '../../../interfaces';
import moment from 'moment';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact = {
    name: '',
    bio: '',
    pic: '',
    status: '',
    id: '',
    chat: [],
  };

  @Input() active: boolean = false;

  lastMessage: Message = { message: '', sentBy: '', time: '0', type: 'text' };

  setLastMessage(chat: Message[]): Message {
    const messages = chat;

    let last: Message = { message: '', sentBy: '', time: '0', type: 'text' };

    messages.forEach((message) => {
      if (parseInt(last.time) < parseInt(message.time)) {
        last = {
          message: message.message,
          sentBy: message.sentBy,
          time: moment(new Date(parseInt(message.time))).format('HH:mm'),
          type: message.type,
        };
      }
    });

    return last;
  }

  constructor() {}

  ngOnInit(): void {
    this.lastMessage = this.setLastMessage(this.contact.chat);
  }
}
