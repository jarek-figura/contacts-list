import React, { Component } from 'react';

class ContactList extends Component {
  state = {
    name: '',
    editId: null,
    formError: null,
  };

  enterEditMode = id => {
    this.setState({ editId: id })
  };
  exitEditMode = () => {
    this.setState({ editId: null })
  };

  handleString = (str, idx, arr) => {
    return `${str.trim().length ? '[' : ''}${str.trim()}${str.trim().length ? ']' : ''}${str.trim().length && arr.length !== idx+1 ? ', ' : ''}`
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      formError: null
    })
  };
  handleSubmit = event => {
    event.preventDefault();
    this.exitEditMode();
    if (this.state.name.trim() === '') {
      this.setState({
        formError: new Error('Musisz podać imię i nazwisko')
      });
      return;
    }
    this.props.addContact(this.state.name, this.props.phone, this.props.email, this.props.categories);
  };

  render() {
    return (
      <div>
        <h2>Lista kontaktów</h2>
        <ul>
          {
            this.props.contacts.map(
              contact => (
                <li key={contact.id}
                    onClick={() => this.enterEditMode(contact.id)}
                    onBlur={() => this.handleSubmit}
                >
                  {
                    this.state.editId === contact.id
                    ? <input name='name'
                        placeholder='Imię i nazwisko'
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    : <strong><p>{contact.name}</p></strong>
                  }
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