import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../../Pages/Cart/Cart';
import Navigation from '../../Pages/Nav/Navigation';
import Products from '../../Pages/Products/Products';
import Details from '../Details/Details';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/details/:productId" element={<Details />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Main;