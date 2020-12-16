import './App.css'
import React from 'react'
import Mega from './components/contador/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


export default (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React arrow</h1>

            <div className="Cards">
            <Card titulo="mega" color="#f01616">
                   <Mega qtde={8}/>
                   

                </Card>

            <Card titulo="Componente Contador" color="#f01616">
                   <Contador numeroInicial={10}/>
                   

                </Card>

            <Card titulo="Componente Controlado" color="#97045D">
                   <Input />
                   

                </Card>

            <Card titulo="Comunicação Indireta" color="#808000">
                   <IndiretaPai />
                   

                </Card>

            <Card titulo="Comunicação Direta" color="#1D0497">
                   <DiretaPai />
                   

                </Card>

            <Card titulo="Renderização Condicional" color="#62bbb6">
                    <ParOuImpar numero = "23" />
                    <UsuarioInfo usuario={{nome: 'Raul'}}/>
                   

                </Card>

            <Card titulo="TabelaProdutos" color="#4f5a71">
                    <TabelaProdutos/>
                </Card>

            <Card titulo="ListaAlunos" color="#446c88">
                    <ListaAlunos/>
                </Card>
                <Card titulo="Familia" color="#de6224">
                    <Familia sobrenome="Jeremias" >
                        <FamiliaMembro nome="Carla " />
                        <FamiliaMembro nome="Raul " />
                        <FamiliaMembro nome="Victoria " />
                    </Familia>
                </Card>

                <Card titulo="Desafio Aleatório" color="#de6224">
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="Fragmento" color="#be3745">
                    <Fragmento />
                </Card>
                <Card titulo="ComParametro" color="#6cb542">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro"
                        nota={9.3}
                    />
                </Card>
                <Card titulo="Primeiro" color="#b2457e">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}