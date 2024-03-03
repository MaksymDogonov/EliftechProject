import './App.css';
import React from "react";
import Header from "./cmponents/Header/Header";
import ShopsList from "./cmponents/ShopsList/ShopsList";
import Product from "./cmponents/Product/Product";


function App() {
    const stores = [
        {name: 'Shop 1', link: 'http://shop1.com'},
        {name: 'Shop 2', link: 'http://shop2.com'},
        {name: 'Shop 3', link: 'http://shop3.com'},
        {name: 'Shop 4', link: 'http://shop4.com'},
        {name: 'Shop 5', link: 'http://shop5.com'},
        {name: 'Shop 1', link: 'http://shop1.com'},
        {name: 'Shop 2', link: 'http://shop2.com'},
        {name: 'Shop 3', link: 'http://shop3.com'},
        {name: 'Shop 4', link: 'http://shop4.com'},
        {name: 'Shop 5', link: 'http://shop5.com'},
        {name: 'Shop 1', link: 'http://shop1.com'},
        {name: 'Shop 2', link: 'http://shop2.com'},
        {name: 'Shop 3', link: 'http://shop3.com'},
        {name: 'Shop 4', link: 'http://shop4.com'},
        {name: 'Shop 5', link: 'http://shop5.com'},
    ];

    const products = [
        {name: 'Product 1', price: '100', image: '/images/product1.jpg'},
        {name: 'Product 2', price: '200', image: '/images/product2.jpg'},
        {name: 'Product 3', price: '300', image: '/images/product3.jpg'},
        {name: 'Product 4', price: '400', image: '/images/product4.jpg'},
        {name: 'Product 5', price: '500', image: '/images/product5.jpg'},
        {name: 'Product 1', price: '100', image: '/images/product1.jpg'},
        {name: 'Product 2', price: '100', image: '/images/product2.jpg'},
        {name: 'Product 3', price: '100', image: '/images/product3.jpg'},
        {name: 'Product 4', price: '100', image: '/images/product4.jpg'},
        {name: 'Product 5', price: '100', image: '/images/product5.jpg'},
    ];
    return (
        <div className="container">
            <Header/>
            <main>
                <ShopsList stores={stores}/>
                <Product products={products}/>
            </main>

        </div>


    );
}

export default App;
