import classes from './Card.module.scss'
import { useEffect, useState, useRef } from 'react'
import ReactStars from "react-rating-stars-component";

const Card = (props) => {

    const [imageNum, setImageNum] = useState(0)
    const [intervalId, setIntervalId] = useState(0)
    const [deviceType, setDeviceType] = useState()
    const cardRef = useRef(null)




    const thirdExample = {
        size: 30,
        count: 5,
        isHalf: true,
        edit: false,
        value: 3.7,
        activeColor: "yellow",
    };

    const images = [
        'https://images.unsplash.com/photo-1653744018861-72293010037b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1438&q=80',

        'https://images.unsplash.com/photo-1653677204619-241774d281ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

        'https://images.unsplash.com/photo-1653671637237-befb4bcfe142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',

        'https://images.unsplash.com/photo-1644772457564-968f55e3fdc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',

        'https://images.unsplash.com/photo-1653690832636-f02f9490935d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    ]


    useEffect(() => {

        // FUNCTION that checks what device type the user is using
        const deviceTypeFunc = () => {
            const ua = navigator.userAgent;
            if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
                // setDeviceType('tablet')
                return "tablet";
            }
            else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
                // setDeviceType('mobile')
                return "mobile";
            }
            // setDeviceType('desktop')
            return "desktop";
        };

        setDeviceType(deviceTypeFunc())


        const card = cardRef.current


        const appearOptions = {
            threshold: 0,
            rootMargin: "-50px 0px"
        }



        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {

            // console.log(entries[0])


            entries.forEach((entry, index) => {
                const entryIndex = index
                if (!entry.isIntersecting) {
                    if (entry.target.parentNode.classList.contains('slider')) {
                        return
                    }

                    switch (deviceTypeFunc()) {

                        case 'tablet':
                        case 'mobile':

                            console.log('bye', intervalId)
                            setImageNum(imageNum = 0)
                            clearInterval(intervalId)


                            break
                    }

                    entry.target.classList.remove(classes[deviceTypeFunc()])



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
                    switch (deviceTypeFunc()) {

                        case 'tablet':
                        case 'mobile':
                            console.log('hi')

                            const newInterval = setInterval(() => {
                                const newNum = imageNum + 1
                                // console.log(imageNum, newNum)

                                setImageNum(newNum > images.length ? imageNum = 0 : imageNum++)

                            }, 2000);
                            console.log(newInterval, entries[index], index, entryIndex, intervalId)
                            setIntervalId(intervalId = newInterval)
                            // appearOnScroll.unobserve(entry.target)


                            break
                    }
                    // console.log(deviceType)
                    entry.target.classList.add(classes[deviceTypeFunc()])
                    entry.target.classList.add(classes.appear)
                    // console.log(entry.target.classList)
                }
            })
        }, appearOptions)

        appearOnScroll.observe(card)
        if (card.parentNode.classList.contains('slider')) {
            card.classList.add(classes.slider_event)
        }

    }, [])


    const hoverFunction = () => {


        console.log(deviceType)

        switch (deviceType) {
            case 'desktop':


                const newInterval = setInterval(() => {
                    const newNum = imageNum + 1
                    console.log(imageNum, newNum)

                    setImageNum(newNum > images.length ? imageNum = 0 : imageNum++)

                }, 2000);

                setIntervalId(newInterval)
                break

        }


    }


    const hoverOut = () => {

        switch (deviceType) {

            case 'tablet':
            case 'mobile':
                let coco
                break

            case 'desktop':

                setImageNum(0)
                clearInterval(intervalId)

                break

        }
    }

    return (
        <div ref={cardRef} onMouseOver={hoverFunction} onMouseOut={hoverOut} className={`${classes.card} ${!props.slider ? classes.single : classes.slider}`}>
            <div className={classes.product__image}>
                {/* <img src='https://images.unsplash.com/photo-1648326311535-21895c185fbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' /> */}

                {props.slider ?

                    <img src={images[0]}></img>

                    :

                    <div style={{ '--num': images.length + 1 }} className={`${classes.images}`}>
                        {images.map((item, i) => {
                            return (
                                <img className={i === imageNum && classes.appear} src={item} />
                            )
                        })}
                    </div>

                }
            </div>
            <div className={classes.product__title}>
                Product title display {deviceType}
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