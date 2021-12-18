import React, { useEffect } from 'react';
import './Navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCart } from '../../features/counter/counterSlice';

const Navigation = () => {
    const cartedProductsBadge = useSelector((state) => state.productsList.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart())
    }, [cartedProductsBadge])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav-list collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/home'>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products'>PRODUCTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cart'>
                                <button type="button" className="btn btn-primary position-relative">
                                    Cart
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartedProductsBadge.length}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navigation;