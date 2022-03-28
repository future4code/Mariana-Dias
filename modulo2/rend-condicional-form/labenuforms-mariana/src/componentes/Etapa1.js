import React from "react";
import styled from "styled-components";


const Conatiner = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
`


export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
          <Conatiner>
        <h2>Etapa 1  - Dados gerais </h2>
        
            <h5> 1. Qual o seu nome?</h5>
            <input></input>
        
            <h5> 2. Qual a sua idade?</h5>
            <input></input>

            <h5>3. Qual o seu email?</h5>
            <input></input>

            <h5>4. Qual a sua escolaridade?</h5>
            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>



            </select>

        </Conatiner>
      </div>
    );
  }
}