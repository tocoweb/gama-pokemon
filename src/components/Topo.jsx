import React from 'react';
import './Topo.css';

export default props => (
    <div className="header">
        <div>
            <h1>PokeStore</h1>
        </div>
        <div className="search">
            <input type="text" placeholder="Digite o nome do Pokemon..." />
            <button>Pesquisar</button>
        </div>
    </div>
)