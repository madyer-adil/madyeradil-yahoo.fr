import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:Contact = new Contact();
  idContact:number;

  constructor(public activetdRoutr:ActivatedRoute,
              public contactService:ContactsService,
              public router:Router) {
    this.idContact=activetdRoutr.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactService.getContact(this.idContact)
      .subscribe(data=>{
        this.contact = data;
      },err=>{
        console.log(err);
      })
  }
  updateContact(){
    this.contactService.updateContacts(this.contact)
      .subscribe(data=>{
        console.log(data);
        alert("Mise a jour effectuer");
        this.router.navigate(['contacts']);
      },err=>{
        console.log(err);
      });;
  }

}
