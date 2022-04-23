import { Component, OnInit } from '@angular/core';
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

  constructor() {
    this.contacts = data[0];
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

  ngOnInit(): void {
    this.online = this.setOnline(this.contacts);
  }
}
