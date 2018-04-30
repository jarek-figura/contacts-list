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
                  <strong><p>{contact.name}</p></strong>
                  <p>{contact.phone}{contact.phone && contact.email ? ', ' : ''}{contact.email}</p>
                  <p>{contact.categories}</p>
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