import { useEffect } from 'react'
import classes from './Right.module.scss'

const Right = () => {
    useEffect(() => {
        const fades = document.getElementsByClassName(classes.fade__in)
        const slides = document.getElementsByClassName(classes.mosaic__item)

        const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px"
        }


        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {

            entries.forEach(entry => {
                if (!entry.isIntersecting) {

                    if (entry.boundingClientRect.top > 100) {
                        // Element is above the viewport
                        entry.target.classList.remove(classes.appear)
                    }
                    else {
                        // Element is below viewport
                        return
                    }
                }
                else {
                    entry.target.classList.add(classes.appear)
                    // appearOnScroll.unobserve(entry.target)
                }
            })
        }, appearOptions)


        const appearOnScroll2 = new IntersectionObserver((entries, appearOnScroll) => {

            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    // console.log(entry.boundingClientRect.top)

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
                    entry.target.classList.add(classes.appear)
                    // appearOnScroll.unobserve(entry.target)
                }
            })
        }, appearOptions)



        for (let fade of fades) {
            appearOnScroll.observe(fade)
        }

        for (let slide of slides) {
            appearOnScroll2.observe(slide)
        }


    }, [])
    return (
        <div className={classes.container}>

            <div className={`${classes.mosaic__description} ${classes.fade__in}`}>
                <h2 className={`${classes.fade__in}`}>Text of image products</h2>

                <div>
                    <p className={`${classes.fade__in}`}>
                        Life with littles is unexpected, we created straps that are comfy while worn as a backpack, cross body, shoulder bag or attached to a stroller.
                    </p>
                </div>


                <button className={`${classes.fade__in}`}>
                    Shop the bag
                </button>

            </div>



            <div className={classes.mosaic}>
                <div className={classes.mosaic__item}>
                    <img src='https://images.unsplash.com/photo-1648295194728-cb01f46ff985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80' />
                </div>

                <div className={classes.mosaic__item}>
                    <img src='https://images.unsplash.com/photo-1648289417645-f41ed721e7ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />
                </div>
            </div>


        </div>
    )
}

export default Right