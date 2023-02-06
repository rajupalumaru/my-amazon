import React from 'react';
import './CheckoutProduct.css';

const CheckoutProduct = ({ item, title, image, price, rating }) => {
    const RemoveFromBasket=()=>{

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
