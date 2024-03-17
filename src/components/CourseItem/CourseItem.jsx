import React from "react";
import styles from './CourseItem.module.css';

const CourseItem = ({course, onAddToCart}) => {
    return (
        <div className={styles.course_item}>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <img src={course.image} alt={course.title} />
            <button onClick={()=>onAddToCart(course.id)}>Add to cart</button>
        </div>
    )
}

export default CourseItem;