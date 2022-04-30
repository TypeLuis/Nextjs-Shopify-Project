import React, { useEffect, useRef, useState } from 'react'
import classes from './review.module.scss'
import ReactStars from "react-rating-stars-component";
import { Rating, LinearProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Progress } from '@mantine/core';
// import Rating from './Rating';
import Pagination from '../Pagination';


const Arr = [
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Bopez',
            'date':'04/03/2022',
            'verified':false,
            'value':2,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':3.7,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
        {
            'name':'Luis Lopez',
            'date':'04/03/2022',
            'verified':true,
            'value':5,
            'title':'Test Title',
            'description':'6 more weeks until my first baby is here! Can’t wait to use my gorgeous ivory diaper bag!! Everything was thought out so perfectly! And customer service was wonderful…'
        },
    ]

const Reviews = () => {


    // https://www.youtube.com/watch?v=BbuLjEqFlw0
    const trueFirst = Arr.sort((a, b) => Number(b.verified) - Number(a.verified))

    const [form, setForm] = useState({
        'name': '',
        'email': '',
        'rating': 5,
        'title': '',
        'review': ''
    })

    const [review, setReview] = useState('Write a Review')

    const [page, setPage] = useState(1)

    const [changeSort, setChangeSort] = useState(false)
    const [sorted, setSorted] = useState(trueFirst)

    const formRef = useRef(null)
    const reviewsRef = useRef(null)

    


    const buttonClick = (e) => {
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
        let id = e.target.id
        let value = e.target.value
        if(id.split('-')[0] === 'mui'){
            id = 'rating'
            value = Number(e.target.value)
        }
        formCopy[id] = value
        console.log(formCopy)
        // console.log(e, id.split('-')[0] === 'mui', Number(value), id)
        setForm(formCopy)

    }

    

    useEffect(()=>{

        const resize = () => {
            reviewsRef.current?.style.height = `${reviewsRef.current?.scrollHeight}px`

            if(window.innerWidth < 600){

                formRef.current.style.height = `0px`
                setReview('Write a Review')
            }
            
        }
        window.onresize = resize
        reviewsRef.current?.style.height = `${reviewsRef.current?.scrollHeight}px`
        // setSorted(trueFirst)
    },[])


    
    const changeSelection = (e) => {
        const value = e.target.value
        const ref = reviewsRef

        ref.current.classList.add(classes.change)
        ref.current.style.height = `0px`
        
        setTimeout(()=>{
            ref.current.classList.remove(classes.change)
            ref.current.style.height = `${ref.current.scrollHeight}px`
        }, 1000)

      
        
        switch(value){
            case 'recent':
                console.log(value)
            break
            
            case 'high':

                const sortByHigh = sorted.sort((a, b) => b.value - a.value)

                setChangeSort(!changeSort)
                setSorted(sortByHigh)
                
                break
                
                case 'low':
                    
                    const sortByLow = sorted.sort((a, b) => a.value - b.value)
                    setChangeSort(!changeSort)
                    setSorted(sortByLow)
                console.log(value)
            break
        }
    }

    // https://shouts.dev/articles/easiest-way-to-paginate-an-array-in-javascript
    const paginator = (items, current_page, per_page_items) => {
        let page = current_page || 1,
        per_page = per_page_items || 10,
        offset = (page - 1) * per_page,

        paginatedItems = items?.slice(offset).slice(0, per_page_items),
        total_pages = Math.ceil(items?.length / per_page);

        return {
            page: page,
            per_page: per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items?.length,
            total_pages: total_pages,
            data: paginatedItems
        };
    }

    // const pageData = paginator(Arr, page, 5)
    // const pageData = paginator(trueFirst, page, 5)
    const pageData = paginator(sorted, page, 5)

    const theme = createTheme({
        palette: {
            yellow: {
            main: '#faaf00',
            contrastText: '#fff',
            },
        },
    });
    
    return (

        <div className={classes.main}>
            <div className={classes.test}>

                <div className={classes.rating}>
                    <div className={classes.ratingHeader}>

                        <h2>Customer Reviews</h2>
                        <Rating size='large' precision={.5} value={3.7} readOnly />
                        <p>Based on X reviews</p>
                    </div>

                    <div className={classes.ratingDisplay}>
                        <div className={classes.ratingValue}>
                            <Rating className={classes.progressRating} value={5} readOnly />

                            <ThemeProvider theme={theme}>

                                <LinearProgress color="yellow" className={classes.progressBar}  variant="determinate"  value={80} />
                            </ThemeProvider>

                            <span className={classes.ratingPercent}>80%</span>
                            <span className={classes.ratingPercent}>(33)</span>
                        </div>
                        <div className={classes.ratingValue}>
                            <Rating value={4} readOnly />
                            <ThemeProvider theme={theme}>

                                <LinearProgress color="yellow" className={classes.progressBar}  variant="determinate"  value={20} />
                            </ThemeProvider>
                            {/* <LinearProgress color='inherit' className={classes.progressBar}  variant="determinate"  value={20} /> */}
                            <span className={classes.ratingPercent}>20%</span>
                            <span className={classes.ratingPercent}>(33)</span>
                        </div>
                        <div className={classes.ratingValue}>
                            <Rating value={3} readOnly />
                             <ThemeProvider theme={theme}>

                                <LinearProgress color="yellow" className={classes.progressBar}  variant="determinate"  value={0} />
                            </ThemeProvider>
                            <span className={classes.ratingPercent}>0%</span>
                            <span className={classes.ratingPercent}>(0)</span>
                        </div>
                        <div className={classes.ratingValue}>
                            <Rating value={2} readOnly />
                             <ThemeProvider theme={theme}>

                                <LinearProgress color="yellow" className={classes.progressBar}  variant="determinate"  value={0} />
                            </ThemeProvider>
                            <span className={classes.ratingPercent}>0%</span>
                            <span className={classes.ratingPercent}>(0)</span>
                        </div>
                        <div className={classes.ratingValue}>
                            <Rating value={1} readOnly />
                             <ThemeProvider theme={theme}>

                                <LinearProgress color="yellow" className={classes.progressBar}  variant="determinate"  value={0} />
                            </ThemeProvider>
                            <span className={classes.ratingPercent}>0%</span>
                            <span className={classes.ratingPercent}>(0)</span>
                        </div>


                    </div>

                </div>

                <div className={classes.button}>
                    <button onClick={(e) => { buttonClick(e) }}>{review}</button>

                    <select onChange={(e)=>{changeSelection(e)}}>
                        <option value='recent'>Most Recent</option>
                        <option value='high'>Highest Rating</option>
                        <option value='low'>Lowest Rating</option>
                    </select>
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

                    <span className={classes.ratingHeader}>Rating</span>
                    <Rating 
                        id='rating'
                        value={form.rating}
                        onChange={(e, newValue) => {
                           changeForm(e)
                            // setValue(newValue);
                        }}
                    />

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


                <button>Submit Review</button>

            </form>

            <div ref={reviewsRef} className={classes.allReviews}>

                {pageData.data.map((item, i)=>{
                {/* {Arr.map((item, i)=>{ */}

                    const reviewId = pageData.page * 5 - 5 + i + 1
                    // console.log(reviewId)

                    return(

                            <div key={i} className={classes.reviewer}>

                                <div className={classes.reviewRating}>

                                    {/* <ReactStars {...reviewStars} /> */}
                                    <Rating 
                                        name={`page_${reviewId}`}
                                        value={item.value}
                                        precision={0.5}
                                        readOnly 
                                    />
                                    <span className={classes.date}>{item.date}</span>
                                </div>

                                <div className={classes.reviewName}>
                                    {item.verified &&
                                        <span className={classes.verified}>Verified</span>
                                    }
                                    <span className={classes.name}>{item.name}</span>
                                </div>


                                <div className={classes.reviewDescription}>
                                    <h2>{item.title}</h2>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                    )

                })}

                <Pagination classes={classes} reviewsRef={reviewsRef} pageData={pageData} setPage={setPage} />

            </div>




        </div>
    )
}

export default Reviews