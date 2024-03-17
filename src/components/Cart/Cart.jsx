import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './Cart.module.css';
import { removeFromCart } from "../../actions/cartActions/cartActions";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const handleRemoveFromCart = (courseId) => {
        dispatch(removeFromCart(courseId))
    }
    return (
        <div className={styles.cart}>
            <h2>Shopping cart</h2>
            {cartItems.length === 0 ? (<p>Your cart is empty</p>) : (<div className={styles.cart_items}>
                {cartItems.map(course => (
                    <CartItem key={course.id} course={course} onRemoveFromCart={handleRemoveFromCart}/>
                ))}
            </div>)}
    </div>
)
}

export default Cart;