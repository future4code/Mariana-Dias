import React from "react";
import axios from "axios";
import styled from "styled-components";
import Home from "./components/Home";
import Playlists from "./components/Playlists";

const headers = {
  headers: {
    Authorization: "mariana-dias-shaw"
  }
}; 

const Pai = styled.div`
height: 100%;
width: 100%;
`

 export default class App extends React.Component{
   state = {
    primeiraTela: "home",
    inputName:"",
    inputMusica: "",
    inputArtista: "",
    inputLink: ""
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

     addTrackToPlaylist = () => {
      const body = {
      name: this.state.inputMusica,
      artist: this.state.inputArtista,
      url: this.state.inputLink
    };
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks", body, headers)
    .then((res) => {
      alert("Musica Adicionada!")

    })
    .catch((err) => {
     alert(err.response.data.message);
    });
   
  }

   onChangeName = (event) => {
    this.setState({inputName: event.target.value})
   }
   onChangeMusica = (e) => {
     this.setState({inputMusica: e.target.value})
   }
   onChangeArtista = (e) => {
    this.setState({inputArtista: e.target.value})
   }
   onChangeLink = (e) => {
    this.setState({inputLink: e.target.value})
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
        irParaHome={this.irParaHome}
        inputMusica={this.inputMusica}
        inputArtista={this.inputArtista}
        inputLink={this.inputLink}
        onChangeMusica={this.onChangeMusica}
        onChangeArtista={this.onChangeArtista}
        onChangeLink={this.onChangeLink}
        addTrackToPlaylist={this.addTrackToPlaylist}
        />
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