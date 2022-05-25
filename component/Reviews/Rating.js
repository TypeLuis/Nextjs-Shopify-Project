import React from 'react'
import ReactStars from "react-rating-stars-component";

const Rating = (props) => {

    const starExample = {
        size: 20,
        count: 5,
        isHalf: true,
        edit: false,
        value: props.value,
        activeColor: "#404040",
    };

    return (
        <div>
            <ReactStars {...starExample} />
        </div>
    )
}

export default Rating