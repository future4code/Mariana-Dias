import axios from "axios";
import React from "react";
import styled from "styled-components";
import logo from "../assests/logo2.png"


const headers = {
    headers: {
      Authorization: "mariana-dias-shaw"
    }
  }; 
   const LogoButon = styled.div`
   display: flex;
   border-bottom: 1px solid white;
   justify-content: space-between;
   align-items: center;
   padding: 9px;
   `
   const Botao = styled.button`
   height: 25px;
   `
  const Lista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid white;
  color: #987a3d;
  padding: 15px;
  > div {
      border: 1px solid white;
      width: 300px;
      padding: 5px;
      display: flex;
      justify-content: space-between;
      margin-top: 6px;
  }
  `
  const Adicionarmusic = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  color: #987a3d;
  margin: 0 auto;
  `
 const ContainerPai= styled.div`
 background-color: #303134;
 height: 100vh;
 `
 const Titulo1 = styled.img`
 color: orange;
 height: 120px;
 `
export default class Playlists extends React.Component {
    state = {
        playlists: [],
        inputMusica: "",
        inputArtista: "",
        inputLink: "",
        selectValue: ""
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


    addTrackToPlaylist = (id) => {
        const playlistId = this.state.playlists && this.state.playlists.filter((i) => {
            return this.state.selectValue === i.name ?? i
        })
        console.log(playlistId);
        const body = {
        name: this.state.inputMusica,
        artist: this.state.inputArtista,
        url: this.state.inputLink
      };
      axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body, headers)
      .then((res) => {
        alert("Musica Adicionada!")
  
      })
      .catch((err) => {
       alert(err.response.data.message);
      });
     
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

      onChangeSelect = (e) => {
        this.setState({selectValue: e.target.value})
        console.log(e.target.value);
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
           const optionsPlaylists = this.state.playlists.map((playlist) => {
            return <option id={playlist.id} >{playlist.name}</option>
               
           });

        return (
            <ContainerPai>
                <LogoButon>
                 <Titulo1 src= {logo}>
                    
                    </Titulo1>
                    <Botao onClick={this.props.irParaHome}>Home</Botao>
                </LogoButon>
                   
                 <Lista> 
                 {listaPlaylists }
                 </Lista>
                 <Adicionarmusic>
                     <h3>Selecione sua playlist:</h3>
                     <select onChange={this.onChangeSelect}> 
                      {optionsPlaylists}
                     </select>
                     <input value={this.state.inputMusica} onChange={this.onChangeMusica} placeholder="Nome da Música"/>
                     <input value={this.state.inputArtista} onChange={this.onChangeArtista} placeholder="Nome do Artista"/>
                     <input value={this.state.inputLink} onChange={this.onChangeLink} placeholder="Link da Música"/>
                     <button onClick={this.addTrackToPlaylist }>Adicionar Música</button>
                 </Adicionarmusic>

                
                
            </ContainerPai>
        );
    };
};