import React from "react";
import styled from "styled-components";

const Conatiner3 = styled.div`
display: flex;
align-items: center;
flex-direction: column;`


export default class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <Conatiner3>
            <h2>Etapa 3 - Informações gerais de ensino</h2>

            
             <h5>5. Por que você não terminou um curso de graduação?</h5>
             <input></input>
        
             <h5>6. Você fez algum curso complementar?</h5>
             <select>
                 <option>Nenhum</option>
                 <option>Curso técnico</option>
                 <option>Curso de inglês</option>

             </select>
          
        </Conatiner3>
      </div>
    );
  }
}