import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQGDyjnb23jVKQ/profile-displayphoto-shrink_200_200/0/1618152996901?e=1625097600&v=beta&t=q8FYRE_BjyAXTZJ6xNgPWoWlJVYe5a1K9Y7_yAP12Uw" 
          nome="Guilherme Chadt" 
          descricao="Olá! 
          Me chamo Guilherme, nasci na linda cidade de Santos/SP, tenho 24 anos e sou estudante Front-End na Labenu."
        />
        
        <ImagemButton 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMfQrqCs8jSFmxi4qcbhQslktPj3F4yzW5g&usqp=CAU" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="Labenu" 
          descricao="Desenvolvimento Front-End com React" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      
      <div className="page-section-container">
        <h2>Informações Pessoais</h2>
        <CardPequeno
        email= "only4you@yahoo.com"
        endereco="Saint Pierre Street, 00124B1"/>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="data:image/png;base64,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" 
          texto="Linkedin" 
        />        

        <ImagemButton 
          imagem="data:image/png;base64,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"
          texto="Slack" 
        />        
      </div>

    </div>
  );
}

export default App;
