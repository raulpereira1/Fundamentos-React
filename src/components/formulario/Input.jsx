import React, {useState} from 'react' 

export default () => {
const [valor, setValor] = useState('Inicial')
function quandoMudar(e) {  
    setValor(e.target.value);
}
    return(
        <div>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

            </div>
            <input value={valor} onChange={quandoMudar}></input>
        </div>
    )
}