import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = "https://media-exp1.licdn.com/dms/image/C4D03AQFVS_wgOdnMlg/profile-displayphoto-shrink_200_200/0/1647969639621?e=1653523200&v=beta&t=jzcKvp5KL7KfR3slorjpxGfy8-cBsXAtG92iUw2sonM" 
          nome="Mariana Barbosa Dias" 
          descricao="Olá, sou Mariana Dias, tenho 24 anos. Atualmente sou estudante da Labenu no curso de Web Full Stack. Sou Técnica Ambiental formada pela instituição de ensino CECC."
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/564x/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.jpg" 
          texto="Ver mais"
        />
      </div>

        <div className='page-section-container'>
        <CardPequeno
        imagem = "https://w7.pngwing.com/pngs/298/243/png-transparent-email-address-computer-icons-mail-miscellaneous-angle-triangle.png"
        nome="Email:"
        email = "marianbarbosad@outlook.com"
        />

        <CardPequeno 
        imagem="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-address-icon-image_2287716.jpg"
        nome="Endereço:"
        endereço="Rua General Prado 187, Santos Dumont - Aracaju SE"
        />
        
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.gruposhbrasil.com.br/templates/site/static/images/grupo-sh-brasil-logo-header.jpg" 
          nome="Hospital e Clínica Santa Helena" 
          descricao="02/2018-05/2019 "
        />
        
        <CardGrande 
          imagem="https://www.pastoraldacrianca.org.br/images/quemsomos/logo_pastoral_da_crianca.png" 
          nome="Pastoral da Criança" 
          descricao="Fui voluntária da Pastoral da Criança por mais de 5 anos em Camaçari na Bahia. Atualmente moro em Aracaju." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
