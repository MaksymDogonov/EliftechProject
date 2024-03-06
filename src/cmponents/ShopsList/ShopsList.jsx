import React, { useEffect } from 'react';
import './ShopsList.css';
import {useQueryParams} from "../../hooks/useQueryParams";

function ShopsList({ stores }) {
    const { queryParams, setQueryParams } = useQueryParams()
    const storeId = queryParams.storeId

    const handleButtonClick = (storeId) => {
        setQueryParams({ storeId })
    };

    return (
        <nav className="shopsList">
            <h3 className="theme">Shops</h3>
            <div className="buttonContainer">
                {stores.map((store, index) => (
                    <button key={index} className="shopButton" onClick={() => handleButtonClick(store.id)}>
                        {store.name}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default ShopsList;
