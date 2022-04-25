import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BubbleContainer, Contact, Message } from '../../../interfaces';
import data from '../../assets/data.json';
import moment from 'moment';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss'],
})
export class MessageBoardComponent implements OnChanges {
  @Input() active = '';

  activeImg = '';
  newMessage = '';

  contact: Contact = {
    name: '',
    bio: '',
    pic: '',
    status: '',
    id: '',
    chat: [],
  };

  contacts: Contact[];

  search = '';
  results: Message[] = [];
  containers: BubbleContainer[] = [];

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

  setQuery(event: Event) {
    this.search = (event.target as HTMLInputElement).value;
    this.setResults(this.search);
  }

  setResults(query?: string) {
    if (query) {
      this.results = this.contact.chat.filter((message) =>
        message.message.toLowerCase().includes(query)
      );
      this.containers = this.setContainers(this.results);
    } else {
      this.results = this.contact.chat;
      this.containers = this.setContainers(this.results);
    }
  }

  setContainers(messages: Message[]): BubbleContainer[] {
    let containers: BubbleContainer[] = [];

    messages.forEach((message, i) => {
      if (i === 0) {
        containers.push({
          sentBy: message.sentBy,
          messages: [
            {
              message: message.message,
              sentBy: message.sentBy,
              time: moment(new Date(parseInt(message.time))).format('HH:mm'),
              type: message.type,
            },
          ],
        });
      } else if (containers[containers.length - 1].sentBy === message.sentBy) {
        containers[containers.length - 1].messages.push({
          message: message.message,
          sentBy: message.sentBy,
          time: moment(new Date(parseInt(message.time))).format('HH:mm'),
          type: message.type,
        });
      } else if (containers[containers.length - 1].sentBy !== message.sentBy) {
        containers.push({
          sentBy: message.sentBy,
          messages: [
            {
              message: message.message,
              sentBy: message.sentBy,
              time: moment(new Date(parseInt(message.time))).format('HH:mm'),
              type: message.type,
            },
          ],
        });
      }
    });
    return containers;
  }

  setActiveImg(str: string) {
    this.activeImg = str;
  }

  setNewMessage(event: Event) {
    this.newMessage = (event.target as HTMLInputElement).value;
  }

  sendMessage() {
    if (this.newMessage) {
      if (
        this.containers[this.containers.length - 1].messages[
          this.containers[this.containers.length - 1].messages.length - 1
        ].time.split(':')[0] ===
        moment(new Date()).format('HH:mm').split(':')[0]
      ) {
        this.containers[this.containers.length - 1].messages.push({
          message: this.newMessage,
          sentBy: 'you',
          time: moment(new Date()).format('HH:mm'),
          type: 'text',
        });
      } else {
        let messageBody: BubbleContainer = {
          sentBy: 'you',
          messages: [
            {
              sentBy: 'you',
              message: this.newMessage,
              type: 'text',
              time: moment(new Date()).format('HH:mm'),
            },
          ],
        };
        this.containers.push(messageBody);
      }
    }
  }

  constructor() {
    this.contacts = data[0];
  }

  ngOnChanges(): void {
    this.contact = this.setContact(this.active);
    this.results = this.contact.chat;
    this.containers = this.setContainers(this.results);
  }
}
