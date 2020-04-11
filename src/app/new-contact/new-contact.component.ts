import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactsService} from '../../services/contacts.service';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ContactsComponent} from '../contacts/contacts.component';
import {AppModule} from '../app.module';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:Contact = new Contact();
  dRoute:RouterLink;
  constructor(public contactsService:ContactsService) { }

  ngOnInit() {
  }

  saveContact(){
    this.contactsService.saveContacts(this.contact)
      .subscribe(data=>{
        console.log(data)
      },err=>{
        console.log(err)
      });
  }

}
