import React, { useRef, useState } from 'react'
import classes from './review.module.scss'
import ReactStars from "react-rating-stars-component";
import Rating from './Rating';


const Reviews = () => {

    const [form, setForm] = useState({
        'name': '',
        'email': '',
        'title': '',
        'review': ''
    })

    const [review, setReview] = useState('Write a Review')

    const formRef = useRef(null)

    const buttonClick = (e) => {
        console.log(e)
        // formRef.current.classList.toggle(classes.active)
        // console.log(formRef.current?.offsetHeight)
        if (formRef.current.classList.contains(classes.active)) {
            formRef.current.classList.remove(classes.active)
            formRef.current.style.height = `0px`
            setReview('Write a Review')
        }
        else {
            formRef.current.classList.add(classes.active)
            // Max-content doesn't add transition to the height so this method works
            formRef.current.style.height = `${formRef.current.scrollHeight}px`
            setReview('Cancel Review')
        }

    }

    const changeForm = (e) => {
        let formCopy = { ...form }
        const id = e.target.id
        const value = e.target.value
        formCopy[id] = value
        console.log(formCopy)
        setForm(formCopy)

    }

    const starExample = {
        size: 30,
        count: 5,
        isHalf: true,
        edit: false,
        value: 3.7,
        activeColor: "yellow",
        onChange: (newValue) => {
            console.log(`Example 3: new value is ${newValue}`);
        }
    };

    return (

        <div className={classes.main}>
            <div className={classes.test}>

                <div className={classes.rating}>
                    <div className={classes.ratingHeader}>

                        <h2>Customer Reviews</h2>
                        <ReactStars {...starExample} />
                        <p>Based on X reviews</p>
                    </div>

                    <div className={classes.ratingDisplay}>
                        <div className={classes.ratingValue}>
                            <Rating value={5} />
                            <span>Progression Bar</span>
                            <span>number%</span>
                            <span>(33)</span>
                        </div>
                        <div className={classes.ratingValue}>
                            <Rating value={4} />
                            <span>Progression Bar</span>
                            <span>number%</span>
                            <span>(33)</span>
                        </div>
                        <div className={classes.ratingValue}>
                            <Rating value={3} />
                            <span>Progression Bar</span>
                            <span>number%</span>
                            <span>(33)</span>
                        </div>
                        <div className={classes.ratingValue}>
                            <Rating value={2} />
                            <span>Progression Bar</span>
                            <span>number%</span>
                            <span>(33)</span>
                        </div>
                        <div className={classes.ratingValue}>
                            <Rating value={1} />
                            <span>Progression Bar</span>
                            <span>number%</span>
                            <span>(33)</span>
                        </div>


                    </div>

                </div>

                <div className={classes.button}>
                    <button onClick={(e) => { buttonClick(e) }}>{review}</button>
                </div>

            </div>

            <form ref={formRef}>

                <div className={classes.name}>

                    <label htmlFor="name">Name</label>
                    <input placeholder='Enter your name (Public)' id="name" value={form.name} onChange={(e) => { changeForm(e) }} />

                </div>


                <div className={classes.email}>

                    <label htmlFor="email">Email</label>
                    <input placeholder='Enter your email (Private)' id="email" value={form.email} onChange={(e) => { changeForm(e) }} />

                </div>


                <div className={classes.rating}>

                </div>


                <div className={classes.title}>

                    <label htmlFor="title">Title</label>
                    <input placeholder='Enter your title' id="title" value={form.title} onChange={(e) => { changeForm(e) }} />

                </div>


                <div className={classes.review}>

                    <label htmlFor="review">Review</label>
                    <textarea placeholder='Enter your review' id="review" value={form.review} onChange={(e) => { changeForm(e) }} />
                    {/* <input placeholder='Enter your review' id="review" value={form.review} onChange={(e) => { changeForm(e) }} /> */}

                </div>

            </form>
        </div>
    )
}

export default Reviews