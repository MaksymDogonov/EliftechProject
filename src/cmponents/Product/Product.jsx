import React, {useEffect, useState} from 'react';
import './Product.css';
import {useQueryParams} from "../../hooks/useQueryParams";

function Product({products, sort, toggleFavorite}) {
    const {setQueryParams, removeQueryParam} = useQueryParams()

    function addToCart(product) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const cartProduct = cartItems.find(localProduct => localProduct.id === product.id)

        if (cartProduct) {
            return
        }

        cartItems.push({...product, amount: 1});
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    const handleSortingChange = (e) => {
        const { name, value } = e.target
        setQueryParams({ sort: JSON.stringify({ ...sort, [name]: value }) })
    }

    const handleSortingEnablingChange = (e) => {
        const { name, checked } = e.target

        if (checked) {
            setQueryParams({ sort: JSON.stringify({ ...sort, [name]: 'asc' }) })
        } else {
            const localSort = { ...sort }
            delete localSort[name]
            Object.keys(localSort).length
                ? setQueryParams({ sort: JSON.stringify(localSort) })
                : removeQueryParam('sort')
        }
    }

    return (
        <div className="containerProduct">
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex'}}>
                    <input name="price" onChange={handleSortingEnablingChange} id="sort-price" style={{width: 'unset'}} checked={!!sort.price} type="checkbox"/>
                    <label style={{margin: 'unset', marginRight: '10px'}} htmlFor="sort-price">Price</label>
                    <select disabled={!sort.price} name="price" value={sort.price} onChange={handleSortingChange}>
                        <option value="asc">asc</option>
                        <option value="desc">desc</option>
                    </select>
                </div>
                <div style={{display: 'flex'}}>
                    <input name="date" onChange={handleSortingEnablingChange} id="sort-date" style={{width: 'unset'}} checked={!!sort.date} type="checkbox"/>
                    <label style={{margin: 'unset', marginRight: '10px'}} htmlFor="sort-date">Date</label>
                    <select disabled={!sort.date} name="date" value={sort.date} onChange={handleSortingChange}>
                        <option value="asc">asc</option>
                        <option value="desc">desc</option>
                    </select>
                </div>
            </div>
            {/*<button className="sortByPrice" onClick={sortByPrice}>Sort by Price</button>*/}
            <div className="products">
                {products.map((product, index) => (
                    <div key={index} className="product">
                        <img className="productImg" src={product.image} alt={product.name}/>
                        <div>{new Date(product.date).toLocaleDateString()}</div>
                        <div className="containerInfo">
                            <p>{product.name}</p>
                            <p className="price">${product.price}</p>
                            <div className="button-container">
                                <button className="addToCartBtn"
                                        onClick={() => addToCart(product)}>Add to Cart
                                </button>
                                <div className="speech-bubble-container">
                                    <div className="speech-bubble">
                                        <div className="message">The item should be added in the Shopping Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="addToFavoritesBtn"
                                onClick={() => toggleFavorite(product.id)}>{!product.favorite ? 'Add to Favorite' : 'Remove from Favorite'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Product;