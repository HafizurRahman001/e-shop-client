import React, { useEffect, useState } from 'react';
import './Products.css';
import { useDispatch, useSelector } from 'react-redux';
import NewProduct from '../../components/NewProduct/NewProduct';
import { fetchProducts } from '../../features/counter/counterSlice';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state?.productsList?.products);
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);


    return (
        <div>
            <div className='container'>
                <div>
                    <div className="row">
                        <div className="col-md-3 bg-light">
                            <div>
                                <h1>Category</h1>
                            </div>
                            <div className='side-nav-menu text-start'>
                                <ul>
                                    <li>All Products</li>
                                    <li>Shirts</li>
                                    <li>Pants</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div>
                                <div className='my-5'>
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {
                                            products?.map((product) => <NewProduct key={product?._id} product={product} />)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;