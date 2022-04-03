import React from "react";
import styled from "styled-components";

const Conatiner2 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;`



export default class Etapa2 extends React.Component {
  render() {
    return (
      
     <div>
        <Conatiner2>
         
         <h2>Etapa 2  - Informações do ensino superior </h2>

         
             <h5>5. Qual o curso?</h5>
             <input></input>
        
             <h5>6. Qual a unidade de ensino?</h5>
             <input></input>
          
        </Conatiner2>
    </div>
    );
  }
}