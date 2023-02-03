import { Component } from "react";
import { ContactsForm } from "components/ContactsForm/ContactsForm";

export class App extends Component {
  render() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ContactsForm tittle='Phonebook' />
    </div>
  );
  }

};
