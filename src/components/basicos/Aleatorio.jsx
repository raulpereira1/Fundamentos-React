import React from 'react'

export default (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    return (
        <div>
            <h2> Valor Aleatório</h2>
            
            <p><strong>Valor Minimo: {min} </strong></p>
            
            <p><strong>Valor Maximo: {max} </strong></p>
            
            <p><strong>Valor Obtido: {aleatorio} </strong></p>
        </div>
    )
}