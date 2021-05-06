import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'marimaria'}
          fotoUsuario={'https://i.pinimg.com/474x/8e/0c/fa/8e0cfaf58709f7e626973f0b00d033d0.jpg'}
          fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsyvnpsxhjGiywxZ4MKMADC6ibC-7D9coAXQ&usqp=CAU'}
        />
        <Post
          nomeUsuario={'josé_2021'}
          fotoUsuario={'https://i.pinimg.com/474x/8e/0c/fa/8e0cfaf58709f7e626973f0b00d033d0.jpg'}
          fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdHsOBT7LX6uG2bsuNqVnjKgnGytoEWTplQ&usqp=CAU'}
        />
      </MainContainer>
    );
  }
}

export default App;
