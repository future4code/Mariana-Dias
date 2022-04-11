import React from "react";
import axios from "axios";
import styled from "styled-components";
import Home from "./components/Home";
import Playlists from "./components/Playlists";
// import logo from "../assests/logo.png"

const headers = {
  headers: {
    Authorization: "mariana-dias-shaw"
  }
}; 

const Pai = styled.div`
background-color: #303134;
height: 100vh;
`

 export default class App extends React.Component{
   state = {
    primeiraTela: "home",
    inputName:"",
  
   }

   createPlaylist = () => {
     const body = {
       name: this.state.inputName
     };
     axios
     .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, headers)
     .then((res) => {
       alert("Nova playlist criada!")
       
       this.getAllPlaylists();

       this.setState({inputName: "" });
     })
     .catch((err) => {
      alert(err.response.data.message);
     });
    
   }

   onChangeName = (event) => {
    this.setState({inputName: event.target.value})
   }
  
   mudarDeTela = () => {
    switch (this.state.primeiraTela){
       case "home":
        return <Home 
        irParaPlaylists= {this.irParaPlaylists}
        inputName = {this.inputName}
        onChangeName = {this.onChangeName}
        createPlaylist = {this.createPlaylist}
        />
      case "playlists":
        return <Playlists 
        irParaHome={this.irParaHome}/>
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
       <Pai >
       
        {this.mudarDeTela()}
       </Pai>
     )
   }
 }