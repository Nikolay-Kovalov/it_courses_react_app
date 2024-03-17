import React from "react";
import styles from './ErrorPage.module.css';

const ErrorPage = ({error}) => {
    return (
        <div className={styles.error_page}>
            <h1>Error was found</h1>  
            <p>{error.message}</p>
</div>
    )
}

export default ErrorPage;