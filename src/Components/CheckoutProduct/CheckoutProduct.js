import React from 'react';
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    const RemoveFromBasket=()=>{
        //Remove Item From Basket
        dispatch({
            type:"REMOVE FROM BASKET",
            id:id,   
        })

    }
    return (
        <div className='checkoutProduct'>
            <img  className='checkoutProduct_image' src={image} alt='' />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating '>
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>🌟</p>
                        ))
                    }
                </div>
                <button onClick={RemoveFromBasket}>Remove From The Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
