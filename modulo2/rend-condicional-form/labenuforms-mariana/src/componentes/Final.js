import React from "react";
import styled from "styled-components";

const ConatinerFinal = styled.div`
display: flex;
align-items: center;
flex-direction: column;`


export default class Final extends React.Component {
  render() {
    return (
      <ConatinerFinal>
             <h2>O FORMULÁRIO ACABOU</h2>
            
            <h4>Muito obrigado por participar! Entraremos em contato!</h4>
        
      </ConatinerFinal>
    );
  }
}