import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';
import {window, windowToggle} from 'rxjs/operators';
//import 'rxjs/add/operator'

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:String="";
  curentPage:number=0;
  size:number=5;
  pages:Array<number>;

  constructor(private http:HttpClient,public contactsService:ContactsService,public router:Router) { }

  ngOnInit() {

  }

  douSearch(){
    this.contactsService.getContacts(this.motCle,this.curentPage,this.size)
      .subscribe(data=>{
        this.pageContacts=data;
        this.pages = new Array(data.totalPages);
      },err=>{
        console.log(err);
      })
  }

  chercher(){
    this.douSearch();
  }

  gotoPage(i:number){
    this.curentPage=i;
    this.douSearch();
  }

  onEditContact(id:number){
    this.router.navigate(['editContact',id]);
  }

  onDeletContact(c:Contact){
    if(confirm('Etes vou sure de vouloir supprimer?'))
    {
      this.contactsService.deletContacts(c.id)
        .subscribe(data=>{
          this.pageContacts.content.splice(this.pageContacts.content.indexOf(c),1);
        },err=>{
          console.log(err);
        });
    }

  }
}
