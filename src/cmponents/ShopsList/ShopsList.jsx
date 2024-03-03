import React from 'react';
import './ShopsList.css';

function ShopsList({ stores }) {
    return (
        <nav className="shopsList">
            <h3 className="theme">Shops</h3>
            <div className="buttonContainer">
                {stores.map((store, index) => (
                    <button key={index} className="shopButton" onClick={() => window.open(store.link, '_blank')}>
                        {store.name}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default ShopsList;