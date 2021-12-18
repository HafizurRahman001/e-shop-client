import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProducts from '../../components/CartProducts/CartProducts';
import { fetchCart } from '../../features/counter/counterSlice';

const Cart = () => {
    const cartedProducts = useSelector((state) => state.productsList.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart())
    }, [cartedProducts]);



    return (
        <div>
            {cartedProducts.length >= 1 ?
                (<div className=''>
                    <div className="new-product-title">
                        <h2>NEW PRODUCTS</h2>
                    </div>
                    <div className='container'>
                        <div className='my-5'>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {
                                    cartedProducts.map((cartProduct) => <CartProducts key={cartProduct?._id} cartProduct={cartProduct} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>) : (
                    <p>You have no order till now. Please go to our <Link to='/products'>Products</Link> page and order fast</p>
                )
            }
        </div>
    );
};

export default Cart;