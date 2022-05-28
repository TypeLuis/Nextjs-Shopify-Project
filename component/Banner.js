import React, { useEffect } from 'react'
import classes from './Banner.module.scss'
const Banner = (props) => {
    useEffect(()=>{

        const element = document.getElementsByClassName(classes.bannerContainer)[0]

        console.log(element)

        const appearOptions = {
            threshold: 0,
            rootMargin: "-50px 0px"
        }

        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {


            entries.forEach(entry => {
                if (!entry.isIntersecting) {

                    // if (entry.boundingClientRect.top > 100) {
                    //     // Element is above the viewport
                    //     entry.target.classList.remove(classes.appear)
                    // }
                }
                else {
                    entry.target.classList.add(classes.appear)
                }
            })
        }, appearOptions)

        appearOnScroll.observe(element)


    })
  return (
      <div className={classes.bannerContainer}>
          <div className={classes.imageContainer}>

            <img src={props.img}></img>

            <div className={classes.textContainer}>

                <h1>{props.name}</h1>
                <p>{props.desc}</p>
            </div>
          </div>
    </div>
  )
}

export default Banner