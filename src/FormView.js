import React, { Component } from 'react';

class FormView extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    categories: [],
    formError: null,
    contacts: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      this.setState({
        formError: new Error('Musisz podać imię i nazwisko')
      });
      return;
    }
    this.props.addContact(this.state.name, this.state.phone, this.state.email, this.state.categories);
    this.setState({
      name: '',
      phone: '',
      email: '',
      categories: ''
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      formError: null
    })
  };

  render() {
    return (
      <div>
        <h3>Dodaj kontakt</h3>
        <form onSubmit={this.handleSubmit}>
          {this.state.formError && <p>{this.state.formError.message}</p>}
          <input name='name'
            placeholder='Imię i nazwisko'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br/>
          <input name='phone'
            placeholder='Numer telefonu'
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <br/>
          <input name='email'
            placeholder='Adres e-mail'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br/>
          <input name='categories'
            placeholder='Kategorie, np. rodzina, praca, ...'
            value={this.state.categories}
            onChange={this.handleChange}
          />
          <br/><br/>
          <button>Dodaj</button>
        </form>
      </div>
    )
  }
}

export default FormView;