import React, { Component } from 'react';
import './comp.css'

export default class PersonalData extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, email, cpf, endereco, cidade } = this.state;
    return(
      <form>
        <fieldset>
          <label htmlFor="name">
            Nome:
            <input className="name" value={ name } type="text" name="name" id="name" onChange={this.handleChange} maxLength="40" required/>
          </label>
          <label htmlFor="email">
            E-Mail:
            <input value={ email } type="email" name="email" id="email" onChange={this.handleChange} />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input value={ cpf } type="number" name="cpf" id="cpf" onChange={this.handleChange} />
          </label>
          <label htmlFor="endereco">
            Endereço:
            <input value={ endereco } type="text" name="endereco" id="endereco" onChange={this.handleChange} />
          </label>
          <label htmlFor="cidade">
            Cidade:
            <input value={ cidade } type="text" name="cidade" id="cidade" onChange={this.handleChange} />
          </label>
          <label htmlFor="">
            <select name="" id=""></select>
          </label>
          <label htmlFor="Casa">
            Casa:
            <input type="radio" id="Casa" name="tipo" />
          </label>
          <label htmlFor="Apartamento">
            Apartamento:
            <input type="radio" id="Apartamento" name="tipo" />
          </label>
        </fieldset>
      </form>
    )
  }
}