import React from "react";
// import './App.css';
import Chat from "../src/componentes/Chat";
import styled from "styled-components";

const Titulo = styled.h1`
display: flex;
justify-content: center;
width: auto;
color: white;
background-color: green;
border: 1px solid black;
width: 450px;
margin: 0 auto;
`


class App extends React.Component {
  render() {
  return (
    <div>
      <Titulo>Whatslabe</Titulo>
     <Chat></Chat>
    </div>
)
  };
};

export default App;
