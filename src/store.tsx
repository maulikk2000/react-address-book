import { observable } from "mobx";
import { Contact } from "./interfaces";

class ContactsStore {
  @observable contacts: Contact[] = [];

  setContacts(contacts: Contact[]) {
    this.contacts = contacts;
  }
}

export { ContactsStore };
