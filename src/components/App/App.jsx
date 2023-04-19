import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter"


import initialContacts from "data/contacts.json";



export default class App extends Component {
 
state = {
  contacts: initialContacts,
  filter: '',
};

addContact = newContact => {
  this.state.contacts.filter( contact =>
    contact.name.toLowerCase().trim() === newContact.number.trim() ||
    contact.number.trim() === newContact.number.trim()
    ).length
    ? alert(`${newContact.name} is already in contacts.`)
    : this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    })
}

changeFilter = event => {
  this.setState({ filter: event.currentTarget.value.toLowerCase() });
}

 render() {
  const{ filter } = this.state;
  const { contacts } = this.state;
  console.log(contacts)
  return (
    <div>
      <ContactForm onAddContact={this.addContact} />
      <Filter value={ filter} onChange={this.changeFilter} />
      <ContactList contacts={contacts}/>
      <GlobalStyle />
    </div>
  );
};

};

