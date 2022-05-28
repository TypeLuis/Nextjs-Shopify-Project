import classes from './Card.module.scss'
import { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";

const Card = (props) => {

    const [imageNum, setImageNum] = useState(0)
    const [intervalId, setIntervalId] = useState(0)


    const thirdExample = {
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

    const images = [
        'https://images.unsplash.com/photo-1653744018861-72293010037b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1438&q=80',

        'https://images.unsplash.com/photo-1653677204619-241774d281ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

        'https://images.unsplash.com/photo-1653671637237-befb4bcfe142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',

        'https://images.unsplash.com/photo-1644772457564-968f55e3fdc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',

        'https://images.unsplash.com/photo-1653690832636-f02f9490935d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    ]


    useEffect(() => {
        // setImageDisplay(images[0])

        const cards = document.getElementsByClassName(classes.card)


        const appearOptions = {
            threshold: 0,
            rootMargin: "-50px 0px"
        }



        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {


            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    if (entry.target.parentNode.classList.contains('slider')) {
                        return
                    }
                    if (entry.boundingClientRect.top > 0) {
                        // Element is above the viewport
                        entry.target.classList.remove(classes.appear)
                    }
                    else {
                        // Element is below viewport
                        return
                    }
                }
                else {
                    if (entry.target.parentNode.classList.contains('slider')) {
                        // entry.target.classList.add(classes.slider_event)
                        return
                    }
                    entry.target.classList.add(classes.appear)
                }
            })
        }, appearOptions)
        for (let card of cards) {
            appearOnScroll.observe(card)
            if (card.parentNode.classList.contains('slider')) {
                card.classList.add(classes.slider_event)
            }
        }
    }, [])


    const hoverFunction = () => {


        // console.log(imageNum)


        const newInterval = setInterval(() => {
            const newNum = imageNum + 1
            console.log(imageNum, newNum)

            setImageNum(newNum > images.length ? imageNum = 0 : imageNum++)

        }, 2000);

        setIntervalId(newInterval)

    }


    const hoverOut = () => {
        let h = false

        // setHover(h)
        setImageNum(0)
        clearInterval(intervalId)
        console.log(h)
    }

    return (
        <div onMouseOver={hoverFunction} onMouseOut={hoverOut} className={`${classes.card} ${!props.slider ? classes.single : classes.slider}`}>
            <div className={classes.product__image}>
                {/* <img src='https://images.unsplash.com/photo-1648326311535-21895c185fbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' /> */}

                {props.slider ?

                    <img src={images[0]}></img>

                    :

                    <div style={{ '--num': images.length + 1 }} className={`${classes.images}`}>
                        {images.map((item, i) => {
                            return (
                                <img className={i === imageNum && classes.appear} style={{ '--imageNum': i + 1 }} src={item} />
                            )
                        })}
                    </div>

                }
            </div>
            <div className={classes.product__title}>
                Product title display
            </div>
            <div className={classes.product_rating}>
                <ReactStars {...thirdExample} />
            </div>
            <div className={classes.product__price}>
                <span>
                    $74.00
                </span>
            </div>

        </div>
    )
}

export default Card