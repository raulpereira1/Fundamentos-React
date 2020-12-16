import React, { Component } from 'react'
import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }
    setPasso = (setPasso) => {
        this.setState({
            passo: setPasso
        })
    }
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.passo} setPasso={this.setPasso}/>
                <Botoes onInc={this.inc} onDec={this.dec} />
            </div>
        )
    }

}

export default Contador