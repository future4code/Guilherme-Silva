import React from 'react';
import TelaCadastro from './Components/TelaCadastro';
import TelaListaUsuarios from './Components/TelaListaUsuarios';
// import TelaDetalhesUsuario from './Components/TelaDetalhesUsuario'



export default class App extends React.Component{

    state = {
        telaAtual: "Cadastro"
    }

    escolheTela = () => {
        switch( this.state.telaAtual ){
            case "Cadastro":
                return < TelaCadastro irParaLista = { this.irParaLista } />

                case "Lista":
                    return < TelaListaUsuarios irParaCadastro = { this.irParaCadastro } />

                    // case "Detalhes":
                    //     return < TelaDetalhesUsuario irParaDetalhes = { this.irParaDetalhes } />

                    default:
                        return <div>ERRO</div>
        }
    }


    irParaCadastro = () => {
        this.setState({ telaAtual: "Cadastro" })
    };
    
    irParaLista = () => {
         this.setState({ telaAtual: "Lista" })
    }

//      irParaDetalhes = () => {
//          this.setState({ detalhes: "Detalhes" })
// }

    render(){
        return(
            <div>
            { this.escolheTela() }
            </div>
        )
    }
}