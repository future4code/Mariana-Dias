import axios from "axios";
import React from "react";

const headers = {
    headers: {
      Authorization: "mariana-dias-shaw"
    }
  }; 

export default class Home extends React.Component {
    render() {

        return (
            <div>
                <h1>Labemusic</h1>
              
                <div>
                    <input value={this.props.inputName} onChange={this.props.onChangeName} placeholder="Nome da Playlist"/>
                    <button onClick={this.props.createPlaylist }>Criar Playlist</button>
                </div>
                <button onClick={this.props.irParaPlaylists}>Ir para playlists</button>
            </div>
        );
    };
};