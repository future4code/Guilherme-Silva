import React from 'react';
import styled from 'styled-components';
import AddPlaylist from './Components/CreatePlaylist';
import Playlists from './Components/ShowPlaylists';

const Header = styled.div`
text-align: center;
font-size: 20px;
color: #4B0082;
border-bottom: 3px solid #4B0082;

`

export default class App extends React.Component{
state = {
  telaAtual: "CriarPlaylist"
}

  changeScreen = () => {
    switch( this.state.telaAtual ){
      case "CriarPlaylist":
        return < AddPlaylist createPlaylists = { this.createPlaylists }/>

        case "AddPlaylists":
          return < Playlists
          showCreatedPlaylists = { this.showCreatedPlaylists }/> 

          default:
            return <div>
              ERROR
            </div>
        
    }
  }

  showCreatedPlaylists = () => {
    this.setState({ telaAtual: "CriarPlaylist"})
  }

  createPlaylists = () => {
   this.setState({ telaAtual: "AddPlaylists" })
 
};


  render(){
    return(
      
      <div>

        <header>

        < Header >

        <h1> Labefy </h1>

        </  Header>

        </header>
     
        <div>

          { this.changeScreen() }

        </div>
      </div>
    )
  }
}