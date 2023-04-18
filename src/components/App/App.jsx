import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";

import initialContacts from "data/contacts.json";



export default class App extends Component {
 
state = {
  contacts: initialContacts,
  name: '',
  number: '',
};

 render() {
  return (
    <div>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <GlobalStyle />
    </div>
  );
};

};

