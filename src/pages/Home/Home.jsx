import React from "react";
import styles from './Home.module.css';
import CourseList from "../../components/CourseList/CourseList";

const Home = () => {
    return (
        <div className={styles.home_page}>
            <h2>Welcome to IT Course!</h2>
            <p>There you will find a lot of courses with different programming languages just like: <br />
                - JavaScript <br />
                - C# <br />
                - C++ <br />
                - Python 
            </p>
            <CourseList/>
        </div>
    )
}

export default Home;