import React from "react";
import CadastroDeUsuario from "./componentes/tela1";
import ListaDeUsuario from "./componentes/tela2";
import axios from "axios";
import styled from "styled-components";


const ContainerPai = styled.div`
border: 1px solid;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 50vh;
width: 50vw;
background-color: aqua;
margin: 0 auto;
`
const Botao = styled.button`
display: flex;
border: 1px solid blue;
margin-bottom: 20px;
`

const headers = {
  headers: {
    Authorization: "mariana-dias-shaw"
  }
};
export default class App extends React.Component {
  state = { 
    paginaEntrada : "tela1",
    inputName: "",
    inputEmail: "",
  }
 

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    axios 
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)
    .then((res) => {
     alert ("Usuario criado com sucesso")

      this.setState({
        inputName: "",
        inputEmail: ""
      });
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};



onChangeName = (event) => {
 this.setState({inputName: event.target.value})
}
onChangeEmail = (event) => {
  this.setState({inputEmail: event.target.value})
 }
  
  render(){
      let telas
    switch (this.state.paginaEntrada){
      case "tela1":
         telas= <CadastroDeUsuario 
    
         inputName = {this.state.inputName}
         inputEmail = {this.state.inputEmail}
         onChangeName = {this.onChangeName}
         onChangeEmail = {this.onChangeEmail}
         createUser = {this.createUser}

         />
        break;
        case "tela2":
           telas= <ListaDeUsuario/>
          break;
          default:
           telas = <p>Nenhuma mensagem inserida</p>
            break;
    }    
    return (
    < div>
    <ContainerPai>
      {telas}

      <Botao onClick={() => this.setState({paginaEntrada: this.state.paginaEntrada === "tela2"? "tela1" : "tela2"})}>Avançar / Voltar</Botao>
      </ContainerPai>
    </div>
  );
  }
  
}