import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Contact} from '../model/model.contact';

@Injectable()
export class ContactsService{

  constructor(public http:HttpClient){

  }

  getContacts(motClet:String,page:number,size:number){
   return this.http.get("http://localhost:8080/chercherContacts?mc="+motClet+"&size="+size+"&page="+page);
  }

  getContact(id:number){
    return this.http.get("http://localhost:8080/contacts/"+id);
  }

  saveContacts(contact:Contact){
    return this.http.post("http://localhost:8080/contacts",contact);
  }

  updateContacts(contact:Contact){
    return this.http.put("http://localhost:8080/contacts/"+contact.id,contact)

  }

  deletContacts(id:number){
    return this.http.delete("http://localhost:8080/contacts/"+id)

  }
}
