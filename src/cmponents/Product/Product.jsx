import React from 'react';
import './Product.css';

function Product({products}) {
    return (
        <div className="containerProduct">
            <div className="products">
                {products.map((product, index) => (
                    <div key={index} className="product">
                        <img className="productImg" src={product.image} alt={product.name}/>
                        <div className="containerInfo">
                            <p>{product.name}</p>
                            <p className="price">${product.price}</p>
                            <div className="button-container">
                                <button className="addToCartBtn"
                                        onClick={() => addToCart(product)}>Add to
                                    Cart
                                </button>
                                <div className="speech-bubble-container">
                                    <div className="speech-bubble">
                                        <div className="message">The item should be added in the Shopping Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function addToCart(product) {
    console.log(`Adding ${product.name} to cart`);
}

export default Product;