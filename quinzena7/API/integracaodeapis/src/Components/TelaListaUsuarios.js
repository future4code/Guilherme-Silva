import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TelaDetalhesUsuario from './TelaDetalhesUsuario';

//Estilização Usuários
const UsuariosContainer = styled.div`
border: 1px solid black;
padding: 10px;
margin: 5px;
width: 200px;
display: flex;
justify-content: space-between;

`


export default class TelaListaUsuarios extends React.Component{
    state = {
      usuarios:[],
      detalhes: "Detalhes"
    }

    componentDidMount() {

        this.pegarUsuarios()

    }

    //arrow function para pegar usuários utilizando axios
 pegarUsuarios = () => {
     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

     axios.get(url, {
         headers: {
             Authorization: "guilherme-silva-munoz"
         }
     })
     .then((res) => {
         this.setState({usuarios: res.data})
     })
     .catch((err) => {
        alert('Ocorreu um erro, tente novamente!')
     })
 }

 //arrow function para deletar usuário utilizando axios 
 deletarUsuario = (id) => {
     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
  axios.delete(url, {
      headers: {
          Authorization: "guilherme-silva-munoz"
      }
  })
  .then(() => {
     alert
     ('Deseja deletar este usuário?')
     alert
     ('Usuário deletado')
     this.pegarUsuarios()
  })
  .catch(() => {
   alert('Ocorreu um erro, tente novamente.')
  })
 }

    render()
    {
        //mapeando usuários 
        const listaDeUsuarios = this.state.usuarios.map((user) => {
            return <UsuariosContainer key = {user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>Deletar</button>
            </UsuariosContainer>
        })
        return(

            <div>
            
                <button onClick = { this.props.irParaCadastro }>
                     Cadastro
                </button>

                <h2>
                     Lista De Usuários
                </h2>

                {listaDeUsuarios}

            </div>
        )
    }
}
        
