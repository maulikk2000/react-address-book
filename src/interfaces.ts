import { ContactsStore } from "./store";

export interface Contact {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  phone: string;
  email: string;
  age: string;
  id: number;
  country: string;
}

export interface HomePageProps {
  contactsStore: ContactsStore;
}

export interface ContactFormProps {
  edit?: boolean;
  onSave?: any;
  contact?: Contact;
  onCancelAdd?: any;
  onCancelEdit?: any;
  contactsStore: ContactsStore;
}
