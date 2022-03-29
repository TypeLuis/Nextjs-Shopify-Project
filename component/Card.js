import classes from './Card.module.scss'
import {useEffect} from 'react'

const Card = () => {

    useEffect(()=>{
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
    return (
        <div className={classes.card}>
            <div className={classes.product__image}>
                <img src='https://images.unsplash.com/photo-1648326311535-21895c185fbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />
            </div>
            <div className={classes.product__title}>
                Product title display
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