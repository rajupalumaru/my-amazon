import React from 'react'
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log("checkout", basket)
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is Empty</h2>
                            <p>You have no Items in your basket.To buy or more items,
                                click "Add To Basket" next to the item</p>
                        </div>
                    ) : (
                        <div>
                            <h1 className='checkout_title'>Your Shopping Basket</h1>
                            {/* List out All of the checkout product */}
                            {
                                basket.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        image={item.image}
                                        rating={item.rating}

                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            {
                basket.length > 0 && (
                    <div className='checkout_right'>
                        <Subtotal />
                    </div>
                )
            }
        </div>

    )
}

export default Checkout
