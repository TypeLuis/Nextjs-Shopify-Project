import classes from './Transition_Image.module.scss'
import { useEffect } from 'react'

const Transition_Image = () => {
    useEffect(() => {
        const fades = document.getElementsByClassName(classes.fade__in)

        const appearOptions = {
            threshold: 1,
            rootMargin: "-50px 0px"
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


        for (let fade of fades) {
            appearOnScroll.observe(fade)
        }



    }, [])
    return (
        <div className={classes.main}>
            <div className={classes.banner}>
                <img src='https://images.unsplash.com/photo-1647603215051-cd634ba66eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />

                <img src='https://images.unsplash.com/photo-1647659545674-bba70d68563d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />

                <div className={`${classes.text_box} ${classes.fade__in}`}>
                    <h1 className={classes.fade__in}>Silence is No Enough</h1>
                    <p className={classes.fade__in}>
                        The minimal vegan leather diaper bag made without functional compromises. The Ayla bag is designed to simplify your life so you can stay focused on what is most important.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Transition_Image