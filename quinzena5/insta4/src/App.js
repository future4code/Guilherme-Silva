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

state = {

 dataUsers: [

    {
      userName: 'Paulinha',
      userPhoto: "https://picsum.photos/50/50",
      userPost: "https://picsum.photos/200/150"
    },

    {
      userName: 'Marimaria',
      userPhoto: "https://i.pinimg.com/474x/8e/0c/fa/8e0cfaf58709f7e626973f0b00d033d0.jpg",
      userPost: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsyvnpsxhjGiywxZ4MKMADC6ibC-7D9coAXQ&usqp=CAU"
    },

    {
      userName: 'josé_2021',
      userPhoto: 'https://i.pinimg.com/474x/8e/0c/fa/8e0cfaf58709f7e626973f0b00d033d0.jpg',
      userPost: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdHsOBT7LX6uG2bsuNqVnjKgnGytoEWTplQ&usqp=CAU'
    }

  ]
}

  render() {
  
    
      const componentes = this.state.dataUsers.map((dataUsers) => {

        return(

          <MainContainer>

          <p>

          {dataUsers.userName} - {dataUsers.userPhoto} - {dataUsers.userPost}

          </p>

          </MainContainer>

        );
       
      } );

      return (

        <div>
          {componentes}
        </div>

      )
      
    }
}

export default App;
