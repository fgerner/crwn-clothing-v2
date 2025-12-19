import {Fragment, useContext} from "react";
import './checkout.styles.scss'
import {CartContext} from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
    const {cartItems, addItemToCart, removeItemFromCart} = useContext(CartContext);
    return (
        <div className={'checkout-container'}>
            <div className={'checkout-header'}>
                <div className={'header-block'}><span>Product</span></div>
                <div className={'header-block'}><span>Description</span></div>
                <div className={'header-block'}><span>Quantity</span></div>
                <div className={'header-block'}><span>Price</span></div>
                <div className={'header-block'}><span>Remove</span></div>
            </div>
            {cartItems.map(cartItem => {
                const {name, quantity, id} = cartItem;
                return (
                    <CheckoutItem key={id} cartItem={{...cartItem, quantity: 1}}/>
                )
            })}
            <span className={'total'}>Total: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
        </div>
    )
}
export default Checkout
