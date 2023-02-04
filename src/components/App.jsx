import { Component } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
// import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  render() {
    const { contacts, } = this.state;

  return (
    <div
      style={{
        width: '600px',
        margin: '30px auto',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <h1 style={{ textAlign: 'center'}}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ textAlign: 'center'}}>Contacts</h2>
      {/* <Filter /> */}
      <ContactList contacts={contacts}/>
    </div>
  );
  }

};
