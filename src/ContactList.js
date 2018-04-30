import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <div>
        <h2>Lista kontaktów</h2>
        <ul>
          {
            this.props.contacts.map(
              contact => (
                <li key={contact.id}>
                  <button onClick={() => this.props.removeContact(contact.id)}>Usuń kontakt</button>
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default ContactList;