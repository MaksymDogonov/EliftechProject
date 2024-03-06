import React, {useEffect, useMemo} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import './ContactForm.css';
import ProductsInForm from "../ProductsInForm/ProductsInForm";

function ContactForm() {
    const initialValues = useMemo(() => {
        const products = JSON.parse(localStorage.getItem('cartItems'));

        return {
            name: '',
            email: '',
            phone: '',
            address: '',
            products: products || [],
        }
    }, [])

    return (
        <div className="form-container">
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ values, isSubmitting}) => (
                    <Form className="containerForm">
                        <div className="containerRow">
                            <div className="formInfo">
                                <div className="form-field">
                                    <label htmlFor="name">Name:</label>
                                    <Field type="text" name="name"/>
                                    <ErrorMessage name="name" component="div"/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email">Email:</label>
                                    <Field type="email" name="email"/>
                                    <ErrorMessage name="email" component="div"/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="phone">Phone:</label>
                                    <Field type="text" name="phone"/>
                                    <ErrorMessage name="phone" component="div"/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="address">Address:</label>
                                    <Field type="text" name="address"/>
                                    <ErrorMessage name="address" component="div"/>
                                </div>
                            </div>
                            <ProductsInForm products={values.products}/>
                        </div>
                        <div className="priceAndSubmit">
                            <div className="summa">Total price: {values.products.reduce((acc, product) => acc + product.price * product.amount, 0)}</div>
                            <div className="containerBtn">
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;
