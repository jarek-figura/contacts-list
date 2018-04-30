import React, { Component } from 'react';

class ContactList extends Component {

  handleString = (str, idx, arr) => {
    return `${str.trim().length ? '[' : ''}${str.trim()}${str.trim().length ? ']' : ''}${str.trim().length && arr.length !== idx+1 ? ', ' : ''}`
  };

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
                  <p>{contact.categories.split(',').map((item, index, arr) => this.handleString(item, index, arr))}</p>
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