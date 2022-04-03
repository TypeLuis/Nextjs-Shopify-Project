import React from 'react'
import { useEffect, useRef } from 'react/cjs/react.development'
import classes from './Main_Carousel.module.scss'

const Main_Carousel = () => {

    const containerRef = useRef(null)




    useEffect(()=>{

        containerRef.current.classList.add(classes.img1)
        containerRef.current.style.left = 0
        let myInterval

        const removeInterval = () => {
            const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

            for (let i = 1; i < interval_id; i++) {
                window.clearInterval(i);
            }
        }

        const carouselSlide = () => {

            const containerLeft = parseInt(containerRef.current.style.left)
            containerRef.current.classList.remove(classes.img1)
            containerRef.current.classList.remove(classes.img2)

            if (containerLeft === 0) {
                containerRef.current.classList.add(classes.img2)
                containerRef.current.style.left = `${-window.innerWidth}px`;
            }
            
            if (containerLeft != 0) {
                containerRef.current.classList.add(classes.img1)
                // psudeo.animation = `image1 8s linear`
                containerRef.current.style.left = '0px';
            }
        }
        
        myInterval = setInterval(carouselSlide, 8000)
        

        const buttonSlider = ( myInterval) => {
            const sliderButtons = document.getElementsByClassName(classes.slider_button)

            const sliderSpread = [...sliderButtons]

            sliderSpread.forEach((button, i) => {
                let position = -window.innerWidth * i
                
                button.addEventListener('click', () => {
                    
                    const index = i
                    containerRef.current.classList.remove(classes.img1)
                    containerRef.current.classList.remove(classes.img2)
                    
                    removeInterval()

                    setTimeout(() => {

                        if (index === 0) {
                            containerRef.current.classList.add(classes.img1)
                        }

                        if (index === 1) {
                            containerRef.current.classList.add(classes.img2)

                        }
                    }, 500)

                    containerRef.current.style.left = `${position}px`

                    myInterval = setInterval(carouselSlide, 8000)

                })
            })
        }


        const resize = () => {
            containerRef.current.classList.remove(classes.img1)
            containerRef.current.classList.remove(classes.img2)
            
            removeInterval()

            setTimeout(() => {

                containerRef.current.classList.add(classes.img1)
                containerRef.current.style.left = 0
                myInterval = setInterval(carouselSlide, 8000)
            }, 1000)
        }

        // window.addEventListener('resize', myInterval, carouselSlide))

        window.onresize = resize
        buttonSlider(myInterval)
    },[])


    return (
    <div className={classes.slide_container}>
        <div ref={containerRef} id="image-container" className={classes.image_container}>

            <img src='https://images.unsplash.com/photo-1648765822429-130e147ca93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                className={classes.slider_image}></img>

            <img src='https://images.unsplash.com/photo-1648684784133-eb5d0787ab9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                className={classes.slider_image}></img>

        </div>

        <div className={classes.button_container}>
            <span className={classes.slider_button}></span>
            <span className={classes.slider_button}></span>
        </div>
        
    </div>
    )
}

export default Main_Carousel