import React from 'react'
import classes from './review.module.scss'
import ReactStars from "react-rating-stars-component";


const Reviews = () => {

    const thirdExample = {
        size: 100,
        count: 5,
        isHalf: true,
        value: 4,
        // color: "blue",
        activeColor: "yellow",
        onChange: (newValue) => {
          console.log(`Example 3: new value is ${newValue}`);
        }
    };
    return (

        <div>
            <ReactStars {...thirdExample} />
        </div>
    )
}

export default Reviews