import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="pequenocard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{props.nome}</h4>
                <p>{ props.email }</p>
                <p>{ props.endereço }</p>
            </div>
           
        </div>
    )
}

export default CardPequeno;