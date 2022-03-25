import React from "react";
import styled from "styled-components";

const CaixaMensagem = styled.div`
margin: 0 auto;
border: 1px solid black;
width: 600px;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: end;
`
const Input1 = styled.input`
height: 15px;
width: 120px;
`
const Input2 = styled.input`
height: 15px;
width: 410px;
`
const Rodape = styled.div`
width: 100%;
`


class Chat extends React.Component{

    state ={
        conversa:[
            {
                mensagem:"Ola!! Bom Dia grupo!!!",
                remetente:"Mariana"
            },
            {
                mensagem:"Que seu dia seja especial! Que tenha as mãos de Deus para te sustentar, sorrisos para te iluminar e amor para te guiar! Bom Dia! 😍✨💟",
                remetente:"Mayra"
            },
            {
                mensagem:"E para Hoje? Que a paz se faça presente, que a alegria seja permanente e que Deus nos livre de todo o mal, amém! ✨🙏",
                remetente:"Denisson"
            },
            {
                mensagem:" Tenham um Ótimo Dia! 🌞❤",
                remetente:"Luana"
            },
            
        ]
    }

    render() {
        
        const mensagens = this.state.conversa.map((index) => {
            return ( 
                <p>{index.remetente}: {index.mensagem}</p>
            )
        })

        return (
            <CaixaMensagem>
                {mensagens}
                <Rodape>
            <Input1 placeholder="Usuário"></Input1>

            <Input2 placeholder="Mensagem"></Input2>

            <button>Enviar</button>

            </Rodape>

            </CaixaMensagem>
        )
        
    }
}


export default Chat;