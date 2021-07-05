import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const CreateUser = styled.div`
text-align:center;
`



export default class UserPage extends React.Component {

  state =
    {
      usuario: '',
      name: '',
      inputsUser: ''
    }

  onChangeInputName = (e) => {
    this.setState
      (
        {
          name: e.target.value
        }
      )
  }


  onChangeInputEmail = (e) => {
    this.setState
      (
        {
          email: e.target.value
        }
      )
  }



  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: 'guilherme-silva-munoz'
      }
    }).then((res) => {
      console.log(res);
      alert('Usuário criado com sucesso!!');
      this.setState({ name: "", email: "" })
    }).catch((err) => {
      alert('Usuário já cadastrado. Cadastre-se com um novo e-mail!')
      console.log(err)
    })

  }

  state = {
    user: []
  };

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'guilherme-silva-munoz'
      }
    }).then((res) => {
      console.log(res)
      this.setState({ user: res })
    }).catch((error) => {
      console.log(error)
    })
  }

  deleteUsers = () => {
    if (window.confirm('Deseja deletar o usuário?')) {
      axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id').then((res) => {
        this.getUsers();
        console.log(res)
      })
    }
  }




  render() {



    return (



      <div>

        <CreateUser>
          <h1>
            Labenusers
          </h1>

          <button onClick={this.state.Lista}>
            Trocar de Página
          </button>

          <h2>
            Criar Usuários
          </h2>

          <input
            placeholder='Nome'
            type={'text'}
            onChange={this.onChangeInputName}
            value={this.state.name}>
          </input>

          <input
            placeholder='E-mail'
            type={'text'}
            onChange={this.onChangeInputEmail}
            value={this.state.email}>
          </input>

          <button
            onClick={this.createUser}>
            Criar

          </button>



        </CreateUser>

      </div>







    );
  }
}

