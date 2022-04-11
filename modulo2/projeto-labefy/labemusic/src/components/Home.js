import axios from "axios";
import React from "react";
import styled from "styled-components";
import logo from "../assests/logo.png"

const headers = {
    headers: {
      Authorization: "mariana-dias-shaw"
    }
  }; 
  const ContainerPai= styled.div`
  background-color: #303134;
  height: 98vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  `
  const Titulo = styled.img`
  color: orange;
  height: 120px;
  `
  const criarPlay = styled.div`
  display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 background-color: aliceblue;
  `

export default class Home extends React.Component {
    render() {

        return (
            <ContainerPai>
                <Titulo src={logo}></Titulo>
              
                <criarPlay>
                    <input value={this.props.inputName} onChange={this.props.onChangeName} placeholder="Nome da Playlist"/>
                    <button onClick={this.props.createPlaylist }>Criar Playlist</button>
                </criarPlay>
                <button onClick={this.props.irParaPlaylists}> Palylists 🎵</button>
            </ContainerPai>
        );
    };
};