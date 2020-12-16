import React from 'react'
import If, { Else } from './If'
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
                Seja bem vindo {props.usuario.nome}!
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo Amigão!
            </If> */}

            <If test={usuario && usuario.nome}>
            Seja bem vindo {props.usuario.nome}!
            <Else>
            Seja bem vindo Amigão!
            </Else>
            </If>
        </div>
    )

}