import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchFilterProducts, purchaseDetails } from '../../features/counter/counterSlice';

const Details = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state?.productsList?.filterProducts);

    useEffect(() => {
        dispatch(fetchFilterProducts(productId))

    }, [])




    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const allInfo = { ...data, products }
        dispatch(purchaseDetails(allInfo))
            .then(result => {
                console.log(result.payload.acknowledged)
            });
        reset();
        window.location.reload(false);
    };



    return (
        <div className='container'>
            This is details {productId}
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <img src={products?.img} alt="" />
                        </div>
                        <div>
                            <h4>{products?.title}</h4>
                            <p>{products?.desc}</p>
                            <h5>{products?.price}</h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='w-100 mb-2' {...register("email")} placeholder='Your Email' />
                            <input className='w-100 mb-2' {...register("phone")} placeholder='Your Phone' />
                            <input className='w-100 mb-2' {...register("district")} placeholder='District' />
                            <input className='w-100 mb-2' {...register("post")} placeholder='Post' />
                            <input className='w-100' {...register("postCode")} placeholder='Post Code' />

                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;