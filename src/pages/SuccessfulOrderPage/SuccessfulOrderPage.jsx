import React from "react";
import styles from './SuccessfulPage.module.css';

const SuccessfulPage = () => {
    return (
        <div className={styles.successful_page}>
            <h1>Thank you for your order</h1>
            <p>Your order has been seccessfully placed</p>
        </div>
    )
}

export default SuccessfulPage;
