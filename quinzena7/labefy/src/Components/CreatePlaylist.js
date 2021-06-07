import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const TituloCreate = styled.h1`
text-align: center;
color: white;
-webkit-text-stroke: 1px #4B0082;
border: 2px solid #4B0082;
width: 30vw;
margin: 4vh 34vw;
`

const ContainerAddPlaylists = styled.div `
position: absolute;
text-align: center;
font-size: 30px;
color: white;
-webkit-text-stroke: 1px #4B0082;
border: 3px solid #4B0082;
border-radius: 10px 0px;
width: 50vw;
height: 28vh;
margin-top: 20vh;
margin-left: 24vw;
`

const SendButton = styled.button`
color: #4B0082;
border: 1px solid #4B0082;
margin-bottom: 1vh;
border-radius: 20px;
cursor: pointer;
`

const SeePlaylistsButton = styled.button`
height: 3vh;
color: #4B0082;
border: 2px solid #4B0082;
border-radius: 20px;
cursor: pointer;
`



export default class AddPlaylist extends React.Component{
   state = {
       playlist:""
   }

   handlePlaylists = (e) => {
       this.setState({ playlist: e.target.value })
       
   }

   criarPlaylist = () => {

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    const Body = {
        name: this.state.playlist
    }

    axios.post(url, Body, {
        headers: {
            Authorization: 'guilherme-silva-munoz'
        }
    }).then((res) => {
        alert('Playlist criada com sucesso!')
        
        this.setState({
            playlist: ''
        })
    }).catch((err) => {
        alert(err.response.data)
    })
   }

    render() {

        return(

            <div>
          


                
<TituloCreate>
    Create Playlist
</TituloCreate>

<SeePlaylistsButton onClick = {this.props.createPlaylists}> See Playlists</SeePlaylistsButton>


                <ContainerAddPlaylists> 

                                <p>Playlist Name</p>

                          
                          <input type ={'text'} value = { this.state.playlist} onChange = { this.handlePlaylists }></input>
                          
                        

<p>                    <SendButton onClick = {this.criarPlaylist}>

Enviar

</SendButton></p>

        
                </ContainerAddPlaylists>


            </div>
        )
    }
}