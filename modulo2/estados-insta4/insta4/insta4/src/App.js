import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Inputs = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
background-color: gray;
width: 280px;
padding: 9px;
height: 100px;
justify-content: space-evenly;
margin: 10px;
`

class App extends React.Component {
  state = {
    cardPost:[
      {
          nomeUsuario:'Paulinha',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'
      },

      {
        nomeUsuario:'Junior',
        fotoUsuario:'https://picsum.photos/50/100',
        fotoPost:'https://picsum.photos/600/450'
      },

      {
          nomeUsuario:'Luciana',
          fotoUsuario:'https://picsum.photos/200/300',
          fotoPost:'https://picsum.photos/400/250'
      }
    ],
    valorInputnomeUsuario: "" ,
    valorInputfotoUsuario: "" ,
    valorInputfotoPost: ""
  };

    adicionarPost = () => {
      const postNovo = {
       nomeUsuario: this.state.valorInputnomeUsuario,
       fotoUsuario: this.state.valorInputfotoUsuario,
       fotoPost: this. state.valorInputfotoPost
      };
      const novoArray = [...this.state.cardPost, postNovo];
      this.setState ({ cardPost: novoArray})

      this.setState({ valorInputnomeUsuario:"", valorInputfotoUsuario: "", valorInputfotoPost: ""})

    }


    onChangenomeUsuario = (event) => {
      this.setState ({valorInputnomeUsuario: event.target.value})
    }
    onChangefotoUsuario = (event) => {
      this.setState ({valorInputfotoUsuario: event.target.value})
    }
    onChangefotoPost = (event) => {
      this.setState({valorInputfotoPost: event.target.value})
      
    }
    
     

  render() {
    let novoPost = this.state.cardPost.map((index) => {
      return (
        <Post
          nomeUsuario={index.nomeUsuario}
          fotoUsuario={index.fotoUsuario}
          fotoPost={index.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <Inputs>
        <input 
      value={this.state.valorInputnomeUsuario}
      onChange={this.onChangenomeUsuario}
      placeholder={"Nome de Usuario"}
      />

      <input
      value={this.state.valorInputfotoUsuario}
      onChange={this.onChangefotoUsuario}
      placeholder={"Foto do Usuario"}
      />

      <input
      value={this.state.valorInputfotoPost}
      onChange={this.onChangefotoPost}
      placeholder={"Foto post"}
      />

    <button onClick={this.adicionarPost}> Postar </button>
    </Inputs>
      {novoPost}
      </MainContainer>
       
      
    );
  }
}

export default App;
