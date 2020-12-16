import React from 'react'
import './TabelaProdutos.css'
import produtos from '../../data/produto'


export default () => {
    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td> R$ {produto.preco}</td>
                </tr>
            )
        })
    };

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </thead>

                <tbody>
                    
                        {getLinhas()}

                </tbody>

            </table>

        </div>
    )
}