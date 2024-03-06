import './App.css';
import React, {useCallback, useEffect, useState} from "react";
import {Navigate, Route, Routes} from 'react-router-dom'
import Header from "./cmponents/Header/Header";
import ShopsList from "./cmponents/ShopsList/ShopsList";
import Product from "./cmponents/Product/Product";
import {useQueryParams} from "./hooks/useQueryParams";
import ContactForm from "./cmponents/ContactForm/ContactForm";

const drugShops = [
    {id: '1', name: 'Shop 1'},
    {id: '2', name: 'Shop 2'},
    {id: '3', name: 'Shop 3'},
    {id: '4', name: 'Shop 4'},
    {id: '5', name: 'Shop 5'},
    {id: '6', name: 'Shop 6'},
]

const mockDrugs = [
    {
        id: '1',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '1',
        favorite: false,
        date: Date.now() + (1 * 86400000)
    },
    {
        id: '2',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '1',
        favorite: false,
        date: Date.now() + (2 * 86400000)
    },
    {
        id: '3',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '2',
        favorite: false,
        date: Date.now() + (3 * 86400000)
    },
    {
        id: '4',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '2',
        favorite: false,
        date: Date.now() + (4 * 86400000)
    },
    {
        id: '5',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '1',
        favorite: false,
        date: Date.now() + (5 * 86400000)
    },
    {
        id: '6',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '1',
        favorite: false,
        date: Date.now() + (6 * 86400000)
    },
    {
        id: '7',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '2',
        favorite: false,
        date: Date.now() + (7 * 86400000)
    },
    {
        id: '8',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '2',
        favorite: false,
        date: Date.now() + (8 * 86400000)
    },
    {
        id: '9',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '1',
        favorite: false,
        date: Date.now() + (9 * 86400000)
    },
    {
        id: '10',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '1',
        favorite: false,
        date: Date.now() + (10 * 86400000)
    },
    {
        id: '11',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '2',
        favorite: false,
        date: Date.now() + (11 * 86400000)
    },
    {
        id: '12',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '2',
        favorite: false,
        date: Date.now() + (12 * 86400000)
    },
    {
        id: '13',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '1',
        favorite: false,
        date: Date.now() + (13 * 86400000)
    },
    {
        id: '14',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '1',
        favorite: false,
        date: Date.now() + (14 * 86400000)
    },
    {
        id: '15',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '2',
        favorite: false,
        date: Date.now() + (15 * 86400000)
    },
    {
        id: '16',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '2',
        favorite: false,
        date: Date.now() + (16 * 86400000)
    },
    {
        id: '17',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '1',
        favorite: false,
        date: Date.now() + (17 * 86400000)
    },
    {
        id: '18',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '1',
        favorite: false,
        date: Date.now() + (18 * 86400000)
    },
    {
        id: '19',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '2',
        favorite: false,
        date: Date.now() + (19 * 86400000)
    },
    {
        id: '20',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '2',
        favorite: false,
        date: Date.now() + (10 * 86400000)
    },
    {
        id: '21',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (11 * 86400000)
    },
    {
        id: '22',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (12 * 86400000)
    },
    {
        id: '23',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (13 * 86400000)
    },
    {
        id: '24',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (14 * 86400000)
    },
    {
        id: '25',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (15 * 86400000)
    },
    {
        id: '26',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (16 * 86400000)
    },
    {
        id: '27',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (17 * 86400000)
    },
    {
        id: '28',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (18 * 86400000)
    },
    {
        id: '29',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (19 * 86400000)
    },
    {
        id: '30',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (10 * 86400000)
    },
    {
        id: '31',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '4',
        favorite: false,
        date: Date.now() + (11 * 86400000)
    },
    {
        id: '32',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '3',
        favorite: false,
        date: Date.now() + (12 * 86400000)
    },
    {
        id: '33',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '3',
        favorite: false,
        date: Date.now() + (13 * 86400000)
    },
    {
        id: '34',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '3',
        favorite: false,
        date: Date.now() + (14 * 86400000)
    },
    {
        id: '35',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '3',
        favorite: false,
        date: Date.now() + (15 * 86400000)
    },
    {
        id: '36',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '3',
        favorite: false,
        date: Date.now() + (16 * 86400000)
    },
    {
        id: '37',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '3',
        favorite: false,
        date: Date.now() + (17 * 86400000)
    },
    {
        id: '38',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '3',
        favorite: false,
        date: Date.now() + (18 * 86400000)
    },
    {
        id: '39',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '3',
        favorite: false,
        date: Date.now() + (19 * 86400000)
    },
    {
        id: '40',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '3',
        favorite: false,
        date: Date.now() + (10 * 86400000)
    },
    {
        id: '41',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '5',
        favorite: false,
        date: Date.now() + (11 * 86400000)
    },
    {
        id: '42',
        name: 'Product1',
        price: 123,
        image: '/images/product1.jpg',
        shopId: '5',
        favorite: false,
        date: Date.now() + (12 * 86400000)
    },
    {
        id: '43',
        name: 'Product2',
        price: 321,
        image: '/images/product2.jpg',
        shopId: '6',
        favorite: false,
        date: Date.now() + (13 * 86400000)
    },
    {
        id: '44',
        name: 'Product3',
        price: 111,
        image: '/images/product1.jpg',
        shopId: '6',
        favorite: false,
        date: Date.now() + (14 * 86400000)
    },
    {
        id: '45',
        name: 'Product4',
        price: 333,
        image: '/images/product2.jpg',
        shopId: '6',
        favorite: false,
        date: Date.now() + (15 * 86400000)
    },
]

function App() {
    const {queryParams, setQueryParams} = useQueryParams()
    const storeId = queryParams.storeId
    const sort = queryParams.sort ? JSON.parse(queryParams.sort) : {}

    const [drugs, setDrugs] = useState(mockDrugs)

    const beProducts = storeId ?
        drugs.filter(drug => drug.shopId === storeId) // filter by shop
        : []

    if (Object.keys(sort).length) {
        Object.keys(sort).forEach((sortKey) => {
            const direction = sort[sortKey]
            beProducts.sort((a, b) => direction === 'asc'
                ? a[sortKey] - b[sortKey]
                : b[sortKey] - a[sortKey])
        })
    }

    beProducts.sort((a, b) => b.favorite - a.favorite)

    useEffect(() => {
        if (!drugShops?.length) {
            return
        }

        const store = drugShops.find(drugShop => drugShop.id === storeId)
        if (!store) {
            setQueryParams({storeId: drugShops[0].id})
        }
    }, [storeId, setQueryParams]);

    const toggleFavorite = useCallback((id) => {
        const localDrugs = [...drugs]
        const targetDrugIndex = localDrugs.findIndex(drug => drug.id === id)
        const updatedDrug = { ...localDrugs[targetDrugIndex], favorite: !localDrugs[targetDrugIndex].favorite }
        localDrugs.splice(targetDrugIndex, 1, updatedDrug)
        setDrugs(localDrugs)
    }, [drugs])

    return (
        <div className="container">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/store"/>}/>
                    <Route element={<><ShopsList stores={drugShops}/>
                        <Product products={beProducts} sort={sort} toggleFavorite={toggleFavorite}/></>} path="/store"/>
                    <Route element={<ContactForm/>} path="/cart"/>
                </Routes>


            </main>
        </div>

    );
}

export default App;
