import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerPai = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
height: 30vh;
`

const Centro = styled.div`
display: flex;
margin: 0 auto;
`


export default class CadastroDeUsuario extends React.Component {
    

render() {
    return (
        <ContainerPai>
            <h2>Cadastro de Usuários</h2>
            <input value={this.props.inputName} onChange={this.props.onChangeName} placeholder="Nome"></input>
            <input value={this.props.inputEmail} onChange={this.props.onChangeEmail} placeholder="E-mail"></input>
            <button onClick={this.props.createUser}>Criar usuário</button>
        </ContainerPai>
    );
};
};