import React from 'react';
import {Field, FieldArray} from 'formik'
import './ProductsInForm.css';

function ProductsInForm({products}) {
    return (
        <FieldArray
            name="products"
            render={arrayHelpers => (
                <div className="productContainer">
                    {products.map((product, index) => (
                        <div key={product.id} className="productCard">
                            <div className="productImage">
                                <img src={product.image} alt={product.name}/>
                            </div>
                            <div className="productDetails">
                                <h2>{product.name}</h2>
                                <p>Price: ${product.price}</p>
                                <div className="quantity">
                                    <label htmlFor={`quantity-${index}`}></label>
                                    <Field type="number" name={`products.${index}.amount`}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        />
    );
}

export default ProductsInForm;
