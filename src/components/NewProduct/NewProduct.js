import React from 'react';

const NewProduct = (props) => {
    const { title, desc, price, img } = props.product;


    const addToCartProduct = () => {
        fetch('http://localhost:5000/add-to-cart', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(props.product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
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
                    <button onClick={addToCartProduct} className="w-100 btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;