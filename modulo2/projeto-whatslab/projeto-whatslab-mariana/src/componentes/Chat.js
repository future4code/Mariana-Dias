import React from "react";
import styled from "styled-components";
import img from "../img/whats.jpeg"

const CaixaMensagem = styled.div`
margin: 0 auto;
border: 1px solid black;
background-image: url(${img});
width: 450px;
height: 94vh;
display: flex;
flex-direction: column;
justify-content: end;
`
const Input1 = styled.input`
height: 15px;
width: 120px;
border-radius: 5px;
`
const Input2 = styled.input`
height: 15px;
width: 260px;
border-radius: 5px;
`
const Rodape = styled.form`
width: 100%;
`
const BalaoDeMensagem = styled.div`
background-color: #468462;
margin-bottom: 22px;
width: 90%;
margin-left: 10px;
border-radius: 6px;
font-family: system-ui;
font-size: 13px;
box-shadow: 4px 9px 11px 2px
`
const Botao = styled.button`
border-radius: 4px;

`



class Chat extends React.Component{

    state ={
        remetente:"",
        mensagem:"",
        conversa:[
            {
                mensagem:"Ola!! Bom Dia grupo!!!",
                remetente:"Mariana"
            },
            {
                mensagem:"Que seu dia seja especial! Que tenha as mãos de Deus para te sustentar, sorrisos para te iluminar e amor para te guiar! Bom Dia! 😍 ✨ 💟",
                remetente:"Mayra"
            },
            {
                mensagem:"E para Hoje? Que a paz se faça presente, que a alegria seja permanente e que Deus nos livre de todo o mal, amém! ✨ 🙏",
                remetente:"Denisson"
            },
            {
                mensagem:" Tenham um Ótimo Dia !! ❤  🌞 ",
                remetente:"Luana"
            },
            
        ]
    }

    onChangeRemetente = (event) => {
        this.setState({ remetente: event.target.value})
    }
    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }

    onClickEnvio = (event) => {
        event.preventDefault();
        const novaConversa = {
            remetente:this.state.remetente,
            mensagem:this.state.mensagem
        }
        const novoArray = [...this.state.conversa];
         novoArray.push(novaConversa);

         this.setState({ conversa: novoArray });
         this.setState({remetente:"", mensagem:""})
  
    }


    render() {
        
        const mensagens = this.state.conversa.map((index) => {
            return ( 
                <BalaoDeMensagem>
                <p>{index.remetente}: {index.mensagem}</p>
                </BalaoDeMensagem>
            )
        })

        return (
            <CaixaMensagem>
                {mensagens}

            <Rodape onSubmit={this.onClickEnvio}>

            <Input1 onChange={this.onChangeRemetente} value={this.state.remetente} placeholder="Usuário"></Input1>

            <Input2 onChange={this.onChangeMensagem} value={this.state.mensagem} placeholder="Mensagem"></Input2>

            <Botao onClick={this.onClickEnvio}>Enviar</Botao>

            </Rodape>

            </CaixaMensagem>
        )
        
    }
}


export default Chat;