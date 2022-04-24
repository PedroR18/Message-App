import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import data from '../../assets/data.json';
import { Contact } from 'interfaces';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  online: Contact[] = [];
  results: Contact[] = [];

  search: string = '';
  @Input() activeChat = '';
  @Output() activeChatEvent = new EventEmitter<string>();

  setActiveChat(id: string) {
    this.activeChatEvent.emit(id);
  }

  setOnline(contacts: Contact[]) {
    let online: Contact[] = [];

    contacts.forEach((contact) => {
      if (contact.status === 'online') {
        online.push(contact);
      }
    });

    return online;
  }

  setResults(query?: string) {
    if (query) {
      this.results = this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(query)
      );
    } else {
      this.results = this.contacts;
    }
  }

  setQuery(event: Event) {
    this.search = (event.target as HTMLInputElement).value;
    this.setResults(this.search);
  }

  constructor() {
    this.contacts = data[0];
  }

  ngOnInit(): void {
    this.online = this.setOnline(this.contacts);
    this.results = this.contacts;
  }
}
