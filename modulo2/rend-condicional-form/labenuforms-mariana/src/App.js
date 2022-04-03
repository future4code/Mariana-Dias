import React from "react";
import styled from "styled-components";
import Etapa1 from "./componentes/Etapa1";
import Etapa2 from "./componentes/Etapa2";
import Etapa3 from "./componentes/Etapa3";
import Final from "./componentes/Final";

const ContainerPai = styled.div`
margin: 0 auto;
height: 70vh;
width: 50vw;
text-align: center;
border: 3px solid black;
background-color: #3e8d99;
padding: 100px;
`

const Botao = styled.button`
margin-top: 35px;
box-shadow: 10px 9px 14px 1px;
border-radius: 4px;
`


export default class App extends React.Component {
  state = {
    paginaAtual:"etapa1"
  }
    renderizaEtapa = () => {
      switch (this.state.paginaAtual) {
        case "etapa1":
           this.setState({paginaAtual: "etapa2"});
          break;
        case "etapa2":
          this.setState({paginaAtual: "etapa3"});
          break;
        case "etapa3":
          this.setState({paginaAtual: "final"});
          break;
        default:
           <p>Nenhuma seção selecionada</p>;
          break;
      }
    }
  


  render() {
      let secao;
      switch (this.state.paginaAtual) {
        case "etapa1":
          secao = <Etapa1 />;
          break;
        case "etapa2":
          secao = <Etapa2 />;
          break;
          case "etapa3":
          secao = <Etapa3/>
          break;
          case "final":
            secao = <Final/>
            break;
        default:
          secao = <p>Nenhuma seção selecionada</p>;
          break;
      }


    return (
      <ContainerPai>
        {secao}
        {this.state.paginaAtual === "final" ? "" : <Botao onClick={this.renderizaEtapa}>Próxima etapa</Botao>}
      </ContainerPai>
    );
  }
}