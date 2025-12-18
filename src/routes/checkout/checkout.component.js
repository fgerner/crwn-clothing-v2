import {Fragment, useContext} from "react";
import './checkout.styles.scss'
import {CartContext} from "../../contexts/cart.context";

const CheckoutComponent = () => {
    const {cartItems, addItemToCart, removeItemFromCart} = useContext(CartContext);
    return (
        <div>
            <h1>Checkout Page</h1>
            <div>
                {cartItems.map(cartItem => {
                    const {name, quantity, id} = cartItem;
                    return (<div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <br/>
                            <span onClick={() => addItemToCart(cartItem)}>increment</span>
                            <br/>
                            <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default CheckoutComponent
