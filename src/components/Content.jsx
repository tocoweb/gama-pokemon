import React from 'react';
import './Content.css';

export default props => (
    <div className="catalogo">
        <div className="cards">
            <div className="card">
                <img className="img" src="https://pokeres.bastionbot.org/images/pokemon/8.png" alt=""/>
                <p className="title">Titulo</p>
                <p className="price">R$ 369,36</p>
                <button>Comprar</button>
            </div>
            <div className="card">
                <img className="img" src="https://pokeres.bastionbot.org/images/pokemon/10.png" alt=""/>
                <p className="title">Titulo</p>
                <p className="price">R$ 450,58</p>
                <button>Comprar</button>
            </div>
            <div className="card">
                <img className="img" src="https://pokeres.bastionbot.org/images/pokemon/17.png" alt=""/>
                <p className="title">Titulo</p>
                <p className="price">R$ 125,36</p>
                <button>Comprar</button>
            </div>
            <div className="card">
                <img className="img" src="https://pokeres.bastionbot.org/images/pokemon/12.png" alt=""/>
                <p className="title">Titulo</p>
                <p className="price">R$ 69,99</p>
                <button>Comprar</button>
            </div>
        </div>
        <div className="cart">
            <div className="cart-title">
                <p>Carrinho</p>
            </div>
            <div className="cart-item">
                <div className="cart-item-title">Poke 1</div>
                <div className="cart-item-price">R$ 235,69</div>
            </div>
            <div className="cart-item">
                <div className="cart-item-title">Poke 3</div>
                <div className="cart-item-price">R$ 128,32</div>
            </div>
            <div className="cart-item">
                <div className="cart-item-title">Poke 4</div>
                <div className="cart-item-price">R$ 200,69</div>
            </div>
            <div className="cart-finish">
                <button>Finalizar</button>
            </div>
        </div>
    </div>
)