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

  constructor() {
    this.contacts = data[0];
  }

  ngOnInit(): void {}
}
