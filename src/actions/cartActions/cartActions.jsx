export const removeFromCart = (courseId) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: courseId
    }
}

export const addToCart = (courseId) => {
    return {
        type: "ADD_TO_CART",
        payload: courseId
    }
}