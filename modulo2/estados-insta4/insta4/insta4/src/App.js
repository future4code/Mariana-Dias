import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Luciana'}
          fotoUsuario={'https://picsum.photos/200/300'}
          fotoPost={'https://picsum.photos/400/250'}
        />

        <Post
          nomeUsuario={'Junior'}
          fotoUsuario={'https://picsum.photos/50/100'}
          fotoPost={'https://picsum.photos/600/450'}
        />
        
      </MainContainer>
       
      
    );
  }
}

export default App;
