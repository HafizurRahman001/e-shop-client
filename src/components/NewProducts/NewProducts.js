import React, { useEffect } from 'react';
import './NewProducts.css';
import NewProduct from '../NewProduct/NewProduct';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/counter/counterSlice';

const NewProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productsList.products);
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);
    return (
        <div className=''>
            <div className="new-product-title">
                <h2>NEW PRODUCTS</h2>
            </div>
            <div className='container'>
                <div className='my-5'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.slice(0, 6).map((product) => <NewProduct key={product?._id} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;