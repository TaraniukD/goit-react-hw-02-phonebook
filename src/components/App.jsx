import { Component } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    ],
    filter: '',
  }

  handleSubmit = data => {
   this.setState(({contacts}) => 
   contacts.find(contact => contact.name === data.name)
    ? alert(`${data.name} is already in contacts`)
     : { contacts: [...contacts, data]});
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  };
  
  FilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
  return (
    this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    )) 
  };

  render() {
    const { filter } = this.state;

  return (
    <div
      style={{
        width: '600px',
        margin: '30px auto',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <h1 style={{ textAlign: 'center', margin: '20px 0px'}}>Phonebook</h1>
      <ContactForm onSubmit={this.handleSubmit}/>
      
      <h2 style={{ textAlign: 'center', margin: '20px 0px'}}>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter}/>
      <ContactList contacts={this.FilteredContacts()}/>
    </div>
  );
  }

};
