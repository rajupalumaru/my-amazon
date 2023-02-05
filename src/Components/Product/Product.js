import React from 'react'
import { useStateValue } from '../../StateProvider';
import './Product.css';

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add Itome to The Basket
        dispatch({
            type: 'ADD TO BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image

            }
        })

    }

    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating '>
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>🌟</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt='' />
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
