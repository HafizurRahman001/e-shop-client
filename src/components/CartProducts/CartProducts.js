import React from 'react';
import { Link } from 'react-router-dom';

const CartProducts = (props) => {
    const { _id, img, title, desc, price } = props.cartProduct;

    const handleDeleteProduct = id => {
        const proceedDeleteProduct = window.confirm('are you sure to delete product?');
        if (proceedDeleteProduct) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }



    };

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {desc}
                    </p>
                    <h5>Price: {price}</h5>
                </div>
                <div className="card-footer">
                    <button onClick={() => handleDeleteProduct(_id)} className=" btn btn-danger">Remove from Cart</button> {' '}
                    <Link to={`/details/${_id}`}>
                        <button className=" btn btn-primary">Proceed to Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CartProducts;