import React, { Component } from 'react';
import ContactList from "./ContactList";
import FormView from "./FormView";

class App extends Component {
  state = {
    contacts: []
  };

  addContact = (name, phone, email, categories) => {
    this.setState(
      ({ contacts }) => ({
        contacts: contacts.concat({
          id: contacts.length === 0 ? 1 : Math.max(...contacts.map(contact => contact.id)) + 1,
          name: name,
          phone: phone,
          email: email,
          categories: categories
        })
      })
    )
  };

  removeContact = id => {
    this.setState(
      ({ oldState }) => ({
        contacts: oldState.contacts.filter( contact => contact.id !== id )
      })
    )
  };

  render() {
    return (
      <div>
        <FormView addContact={this.addContact} />
        <hr/>
        <ContactList
          contacts={this.state.contacts}
          removeContact={this.removeContact} />
      </div>
    );
  }
}

export default App;
