import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import styles from './CourseList.module.css';
import CourseItem from "../CourseItem/CourseItem";
import { addToCart } from "../../actions/cartActions/cartActions";

const CourseList = () => {
    const courses = useSelector(state => state.courses);
    const dispatch = useDispatch();
    const handleAddToCart = (courseId) => {
        dispatch(addToCart(courseId));
    }
    return (
        <div className={styles.courseList}>
            {courses.map(course => (
<CourseItem key={course.id} course={course} onAddToCart={handleAddToCart}/>
            ))}
        </div>
    )
}
export default CourseList;