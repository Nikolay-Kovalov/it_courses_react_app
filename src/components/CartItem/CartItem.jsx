import React from "react";
import styles from './CartItem.module.css';

const CartItem = ({ course, onRemoveFromCart }) => {
    return (
        <div className={styles.cart_item}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <img src={course.image} alt={course.title} />
            <button onClick={()=>{onRemoveFromCart(course.id)}}>Remove</button>
        </div>
    )
}

export default CartItem;