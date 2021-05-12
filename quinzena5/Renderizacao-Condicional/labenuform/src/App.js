import React from 'react';
import styled from 'styled-components';


const Background = styled.div`
background-color: #363636;
`

const Title = styled.div`
margin-top: 1px;
-webkit-text-stroke: 1mm 	#F08080;
font-size: 40px;
text-align: center;
align-content: center;
justify-content: space-around;
border: 6px solid whitesmoke;
display: flex;
border-radius: 0px 20px 0px 20px;
margin-right: 200px;
margin-left: 200px;
`

const Formulario = styled.div`
margin-left: 200px;
margin-right: 200px;
-webkit-text-stroke: 0.3mm black;
font-size: 20px;
text-align: center;
`
const Botao = styled.button`
-webkit-text-stroke: 0.3mm black;
border-color: 10px white;
border-radius: 6px;

`

const Fieldset = styled.fieldset`
margin-top: 10px;
border: 4px solid  whitesmoke;
border-radius: 0px 20px 0px 20px;

`


function App() {
  return (

    <Background>

   <div>

      <Title className="title">

        FORMULÁRIO
       
      </Title>

        <section>

          <Formulario className="Formulario">

                <Fieldset className= "fieldset"> 

        <h1> ETAPA 1 - DADOS GERAIS</h1>

     <div>

        <p>
         QUAL SEU NOME?
        </p>

        <input type="text" id="nome" >
        </input>

     </div>

      <div>

        <p>
         QUAL SEU IDADE?
        </p>

        <input type="text" id="idade" >
        </input>

      </div>

      <div>

        <p>
          QUAL SEU E-MAIL?
        </p>

        <input type="text" id="e-mail">
        </input>
      </div>

      <div>

        <p>
         QUAL O GRAU DE ESCOLARIDADE?
        </p>

        <input type="select" id="grau-escolaridade"  >
        </input>

      </div>


     
      <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

      <div>

      <p>QUAL SEU E-MAIL?</p>
        <input type="text" id="e-mail" >
        </input>

      </div>

      <div>

      <p>QUAL O GRAU DE ESCOLARIDADE?</p>

        <input type="select" id="grau-escolaridade"  >
        </input>

      </div>

      <br/>

    
      <h1> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

      <div>

      <p>QUAL SEU E-MAIL?</p>

        <input type="text" id="e-mail" >
        </input>

      </div>

      <div>
      <p>QUAL O GRAU DE ESCOLARIDADE?</p>

       <input type="select" id="grau-escolaridade">
       </input>

      </div>




      <Botao>

       ENVIAR FORMULÁRIO
    
      </Botao>

      </Fieldset>

    </Formulario>

 
    

     </section>

   </div>

   </Background>
    
   
  );
}

export default App;
