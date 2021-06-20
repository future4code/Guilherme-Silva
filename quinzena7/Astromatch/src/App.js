import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import Matches from './Components/Matches';
import Footer from './Components/Footer';


const AstromatchTitle = styled.h2`
margin: 2%;
display: flex;
justify-content: space-between;
color: black;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
letter-spacing: 4px;
border-bottom: 2px red solid;
`
const HeartBeatIcon = styled.div`
color: black;
`

export default class App extends React.Component{

// state = {

//   telaAtual= "Home"

// }

// trocarTela = () => {
//   switch( this.state.telaAtual ){
//     case "Home":
//     return < Matches irParaHome = {this.irParaHome} />
//     case "TelaDeMatch":
//     return < 
//   }
// }



render(){
   return (
    <div className="App">
      <header>

        <AstromatchTitle>
          astromatch
          <HeartBeatIcon>
            <FontAwesomeIcon icon={faHeartbeat} />
          </HeartBeatIcon>
        </AstromatchTitle>

      </header>
 


<Matches />


      <footer>
        <Footer />
      </footer>

    </div>
  );
}

 
}


