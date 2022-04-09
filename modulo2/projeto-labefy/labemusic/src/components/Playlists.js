import axios from "axios";
import React from "react";


const headers = {
    headers: {
      Authorization: "mariana-dias-shaw"
    }
  }; 

export default class Playlists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getAllPlaylists();
    }

    getAllPlaylists () {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        axios
         .get(url, headers)
         .then((res) => {
            
            this.setState({playlists: res.data.result.list})
         })
         .catch((err) => {
            console.log(err.response.data);
        });
    }

    deletePlaylist (id) {
    const urll = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    alert("Sua playlist será deletada.")

    axios
     .delete(urll, headers)
     .then((res) => {
        this.getAllPlaylists();

        this.setState({playlists: [] });
        });
    }

    render() {
     
        const listaPlaylists = this.state.playlists.map((playlist) => {
            return <div key={playlist.id}>{playlist.name} 
               <button onClick={() => this.deletePlaylist(playlist.id)}>Deletar</button>
                </div>;
           });

        return (
            <div>
                 <h1>Playlists</h1>
                 {listaPlaylists }
                 <div>
                    <input value={this.props.inputMusica} onChange={this.props.onChangeMusica} placeholder="Nome da Música"/>
                    <input value={this.props.inputArtista} onChange={this.props.onChangeArtista} placeholder="Nome do Artista"/>
                    <input value={this.props.inputLink} onChange={this.props.onChangeLink} placeholder="Link da Música"/>
                    <button onClick={this.props.addTrackToPlaylist }>Adicionar Música</button>
                </div>

                <button onClick={this.props.irParaHome}>Ir para Home</button>
                
            </div>
        );
    };
};