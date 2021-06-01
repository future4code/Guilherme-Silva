import React from 'react';
import axios from 'axios';

export default class TelaCadastro extends React.Component{
state = {
    nome: "",
    email:  ""
} 

handleNome = (e) => {

this.setState( { nome: e.target.value } )

}

handleEmail = (e) => {

    this.setState( { email: e.target.value } )

}

cadastroUsuario = () => {

     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

     const Body = {
         name: this.state.nome,
         email: this.state.email
     }

     axios.post(url, Body, {
         headers: {

             Authorization: "guilherme-silva-munoz"

         }
     })

     .then((res) => {

         alert('Cadastro realizado com sucesso!')

         this.setState( {nome: "", email: ""} )

     })

     .catch((err) => {

         alert(err.response.data.message)

     } )

    }
    
    render()
    {
        return(

            <div>

                <button onClick = { this.props.irParaLista }>
                     Lista De Usuarios
                </button>
                
                <h2>
                     Cadastro
                </h2>

                <input 
                     placeholder={"Nome:"}
                     value={this.state.nome} 
                     onChange={this.handleNome}>
                 </input>

                <input 
                     placeholder={"E-mail:"} 
                     value={this.state.email} 
                     onChange={this.handleEmail}>
                </input>

                <button onClick={this.cadastroUsuario}>
                     Cadastrar Usuário
                </button>

            </div>
        )
    }
}



