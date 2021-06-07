import axios from 'axios';
import React from 'react';
import styled from "styled-components";

const TituloPlaylists = styled.h1`
text-align: center;
color: white;
-webkit-text-stroke: 1px #4B0082;
border: 2px solid #4B0082;
width: 30vw;
margin: 4vh 34vw;
`

const CreatePlaylistButton = styled.button`
height: 3vh;
color: #4B0082;
border: 1px solid #4B0082;
border-radius: 20px;
cursor: pointer;
`

const PlaylistsContainer = styled.div`
color: white;
font-size: 20px;
-webkit-text-stroke: 1px #4B0082;
border: 2px solid #4B0082;
padding: 4px;
margin: 5vw;
width: 30vw;
display: flex;
justify-content: space-between;
margin: 3vw 33vw;
`

const DeleteButton = styled.button`
height: 3vh;
color: #4B0082;
border: 2px solid #4B0082;
border-radius: 20px;
cursor: pointer;
`


export default class Playlists extends React.Component{
    state = {
        playlists:[]
    }
    
    componentDidMount(){

        this.pegarPlaylists()

    }

    pegarPlaylists = () => {
const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        axios.get(url, {
            headers: {
                Authorization: 'guilherme-silva-munoz'
            } 
        }).then((res) => {
            this.setState({playlists: res.data.result.list})
        }).catch((err) => {
            alert('Ops! Ocorreu um problema, tente novamente.')
        })
    }

    deletarPlaylists = (Id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlist${Id}`

            axios.delete(url , {
                headers: {
                    Authorization: "guilherme-silva-munoz"
                }
            })
            .then(() => {
                alert
                ('Deseja deletar esta playlist?')
                alert
                ('Playlist deletada')
                this.pegarPlaylists()
            })
            .catch(() => {
                alert('Ops! aconteceu um erro, tente novamente.')
            })

    }

    render(){

        const listaDePlaylists = this.state.playlists.map((playlistId) => {
            return <PlaylistsContainer key = {playlistId.id}>
                {playlistId.name}
              <DeleteButton
              onClick={() => this.deletarPlaylists(playlistId.id)}>Deletar
              </DeleteButton>
            </PlaylistsContainer>
        })

        return(

            <div>


                <TituloPlaylists>
                    Playlists
                </TituloPlaylists>

               <CreatePlaylistButton
 onClick = { this.props.showCreatedPlaylists }>
                    Create Playlist

</CreatePlaylistButton>

{listaDePlaylists}
               
            </div>
        )
    }
}