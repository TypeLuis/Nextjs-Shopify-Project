import React, { useEffect, useRef } from 'react'
import classes from './Main_Carousel.module.scss'

const Main_Carousel = () => {

    const containerRef = useRef(null)

    const carouselSlide = () => {

            containerRef.current?.style.transition = 'left 1s'
            // let outer = e.target.getBoundingClientRect()

            const containerLeft = parseInt(containerRef.current?.style.left)
            containerRef.current?.classList.remove(classes.img1)
            containerRef.current?.classList.remove(classes.img2)

            if (containerLeft >  -window.innerWidth *.5) {
                containerRef.current?.classList.add(classes.img2)
                containerRef.current?.style.left = `${-window.innerWidth}px`;
            }
            
            if (containerLeft < -window.innerWidth *.5) {
                containerRef.current?.classList.add(classes.img1)
                containerRef.current?.style.left = '0px';
            }
    }

    const removeInterval = () => {
        const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }
    }


    
    let pressed = false
    let startX
    let x
    // const containerStyle = containerRef.current?.style
    
    const checkBoundary = (e) => {
        
        // let outer = e.target.getBoundingClientRect()
        const containerStyle = containerRef.current?.style


        if(parseInt(containerStyle.left) > 0){
            containerStyle.left ='0px'
        }

        
        // else if(inner.right < outer.right){
        else if(parseInt(containerStyle.left) < -window.innerWidth){
            containerStyle.left = `-${window.innerWidth}px`
        }
    }
    
    
    const mouseDown = (e) => {
        // if(e.target.parentNode.classList.contains(classes.text_div)) {
        //     // e.target.style.cursor = 'text'
        //     return
        // }
        if(e.target.tagName === 'SPAN') return
        
        removeInterval()
        
        containerRef.current?.classList.remove(classes.img1)
        containerRef.current?.classList.remove(classes.img2)
        
        containerRef.current?.style.transition = ''
        pressed = true
        const mobile = e.touches ? e.touches[0].clientX : e.clientX

        startX = mobile -  containerRef.current?.offsetLeft
        e.target.style.cursor = 'grabbing'
        console.log(startX)
    }
    
    const mouseEnter = (e) => {
        // if(e.target.parentNode.classList.contains(classes.text_div)) {
        //     e.target.style.cursor = 'text'
        //     return
        // }
        e.target.style.cursor = 'grab'
    }
    
    const mouseUp = (e) => {
        // if(e.target.parentNode.classList.contains(classes.text_div)) {
        //     // e.target.style.cursor = 'text'
        //     return
        // }
        if(e.target.tagName === 'SPAN') return
        e.target.style.cursor = 'grab'
        pressed = false
        containerRef.current?.style.transition = 'left 2s'

        let outer = e.target.getBoundingClientRect()

        const containerStyle = parseInt(containerRef.current?.style.left)
        const outerWidth10 = -outer.width * .10
        const outerWidth90 = -outer.width * .90
        let myInterval

        //  if the left image is showing more than the right image
        if ( containerStyle > -window.innerWidth *.5){
            // if the right image is showing less than 10 percent
            if(containerStyle > outerWidth10){
                
                containerRef.current?.style.left = '0px'
                containerRef.current?.classList.add(classes.img1)
                myInterval = setInterval(carouselSlide, 8000)
                console.log('go back')
            }
            else{
                
                containerRef.current?.style.left = `-${window.innerWidth}px`
                containerRef.current?.classList.add(classes.img2)
                myInterval = setInterval(carouselSlide, 8000)
            }
        }
        
        // right image showing more
        else if (containerStyle < -window.innerWidth *.5){
            // if right image is more than 90 percent
            if((containerStyle < outerWidth90)){
                containerRef.current?.style.left = `-${window.innerWidth}px`
                containerRef.current?.classList.add(classes.img2)
                myInterval = setInterval(carouselSlide, 8000)
                console.log('go back')
            }
            else{
                
                containerRef.current?.style.left = '0px'
                containerRef.current?.classList.add(classes.img1)
                myInterval = setInterval(carouselSlide, 8000)
            }
        }
    }

    const mouseMove = (e) => {
        if(pressed === false) return;
        console.log(e)
        e.stopPropagation()
        e.preventDefault()

        const mobile = e.touches ? e.touches[0].clientX : e.clientX

        console.log(mobile)

        x = mobile
        console.log(x - startX)

        containerRef.current?.style.left = `${x - startX}px`

        checkBoundary(e)
    }

    




    useEffect(()=>{

        const containerStyle = containerRef.current?.style
        const containerClass = containerRef.current?.classList
    
        containerStyle.transition = 'left 1'
        // containerClass.add(classes.img1)
        containerStyle.left = 0
        let myInterval

        const addTransition = () => { containerStyle.transition = 'left 1s' }

        
        
        
        // myInterval = setInterval(carouselSlide, 8000)
        

        const buttonSlider = ( myInterval) => {

            
            const sliderButtons = document.getElementsByClassName(classes.slider_button)
            
            const sliderSpread = [...sliderButtons]
            
            sliderSpread.forEach((button, i) => {
                
                button.addEventListener('click', (e) => {
                    
                    // e.stopPropagation()
                    addTransition()
                    
                    let position = -window.innerWidth * i
                    const index = i
                    containerClass.remove(classes.img1)
                    containerClass.remove(classes.img2)
                    
                    removeInterval()
                    
                    setTimeout(() => {

                        if (index === 0) {
                            containerClass.add(classes.img1)
                        }

                        if (index === 1) {
                            containerClass.add(classes.img2)

                        }
                        myInterval = setInterval(carouselSlide, 8000)
                    }, 1000)
                    
                    containerStyle.left = `${position}px`


                }, {capture: true})
            })
        }


        const resize = () => {

            addTransition()

            containerClass.remove(classes.img1)
            containerClass.remove(classes.img2)
            
            removeInterval()

            setTimeout(() => {

                containerClass.add(classes.img1)
                containerStyle.left = 0
                myInterval = setInterval(carouselSlide, 8000)
            }, 1000)
        }

        // window.addEventListener('resize', myInterval, carouselSlide))

        window.onresize = resize
        buttonSlider(myInterval)
    },[])


    return (
    <div

        onMouseDownCapture={(e)=>{mouseDown(e)}} 

        onMouseEnter={(e) => {mouseEnter(e)}}

        onMouseUp={(e) => {mouseUp(e)}}

        onMouseMove={(e)=>{mouseMove(e)}}

        onTouchStart={(e)=>{mouseDown(e)}}

        onTouchEnd={(e)=>{mouseUp(e)}}

        onTouchMove={(e)=>{mouseMove(e)}}

        className={classes.slide_container}

    >
        <div ref={containerRef} id="image-container" className={classes.image_container}>

            <div className={`${classes.first_img} ${classes.img_div}`}>

                

                <img src='https://images.unsplash.com/photo-1648765822429-130e147ca93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                    className={classes.slider_image} />

                <div className={classes.text_div}>

                    <h2>The Test Title</h2>
                    <p>Shop the Title</p>
                    <button>Shop now</button>

                </div>

                
            </div>


            <div className={`${classes.second_img} ${classes.img_div}`}>


                <img src='https://images.unsplash.com/photo-1648684784133-eb5d0787ab9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                    className={classes.slider_image}/>

                <div className={classes.text_div}>

                    <h2>The Test Title</h2>
                    <p>Shop the Title</p>
                    <button>Shop now</button>
                </div>
            </div>

        </div>
        <div className={classes.button_container}>
            <span className={classes.slider_button}></span>
            <span className={classes.slider_button}></span>
        </div>

        
    </div>
    )
}

export default Main_Carousel