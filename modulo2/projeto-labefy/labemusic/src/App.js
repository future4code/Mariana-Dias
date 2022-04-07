import React from "react";
import axios from "axios";
import styled from "styled-components";
import Home from "./components/Home";
import Playlists from "./components/Playlists";

const Pai = styled.div`
height: 100%;
width: 100%;
`

 export default class App extends React.Component{
   state = {
    primeiraTela: "home"
   }

   mudarDeTela = () => {
    switch (this.state.primeiraTela){
       case "home":
        return <Home irParaPlaylists= {this.irParaPlaylists}/>
      case "playlists":
        return <Playlists irParaHome={this.irParaHome}/>
        default:
          return <div>Erro! pagina não encontrada!</div>
    }
  
  }

    
    irParaPlaylists = () => {
      this.setState({primeiraTela: "playlists"})
    }

    irParaHome = () => {
      this.setState({primeiraTela: "home"})
    }

   render(){
     
     return(
       <div >
        {this.mudarDeTela()}
       </div>
     )
   }
 }


 