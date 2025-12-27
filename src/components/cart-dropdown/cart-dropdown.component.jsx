import {useContext} from 'react';

import {CartContext} from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles';
import {useNavigate} from "react-router-dom";
import {EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdown>
            <CartItem>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItem>
            <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdown>
    );
};

export default CartDropdown;
