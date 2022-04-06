import classes from './Transition_Image.module.scss'
import { useEffect } from 'react'

const Transition_Image = () => {
    useEffect(() => {
        const fades = document.getElementsByClassName(classes.fade__in)
        const imgs = document.getElementsByClassName('img_change')

        const threshold = appearOnScroll ? 1 : 0


        const appearOptions = {
            threshold: threshold,
            rootMargin: "-50px 0px"
        }
        // const appearOptions2 = {
        //     threshold: 0,
        //     rootMargin: "-50px 0px -50px 0px"
        // }



        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {


            entries.forEach(entry => {
                if (!entry.isIntersecting) {

                    if (entry.boundingClientRect.top > 100) {
                        // Element is above the viewport
                        entry.target.classList.remove(classes.appear)
                    }
                }
                else {
                    entry.target.classList.add(classes.appear)
                }
            })
        }, appearOptions)


        const appearOnScroll2 = new IntersectionObserver((entries, appearOnScroll) => {


            entries.forEach(entry => {
                if (!entry.isIntersecting) {

                    // Pauses the animation when element is not in view from top or bottom
                        // Element is above the viewport
                        entry.target.style.animationPlayState = 'paused'
                    // }

                }
                else {
                    entry.target.style.animationPlayState = 'running'
                    // appearOnScroll.unobserve(entry.target)
                }
            })
        }, appearOptions)


        for (let fade of fades) {
            appearOnScroll.observe(fade)
        }

        for (let img of imgs) {
            appearOnScroll2.observe(img)
        }
        // const [img1, img2] = imgs[0].children[0].children






    }, [])

    return (
        <div className={classes.main}>
            <div className={classes.banner}>
                <img className='img_change' src='https://images.unsplash.com/photo-1647603215051-cd634ba66eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />

                <img className='img_change' src='https://images.unsplash.com/photo-1647659545674-bba70d68563d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />


                <div className={`${classes.text_box} ${classes.fade__in}`}>
                    <h1 className={classes.fade__in}>Silence is No Enough</h1>
                    <p className={classes.fade__in}>
                        The minimal vegan leather diaper bag made without functional compromises. The Ayla bag is designed to simplify your life so you can stay focused on what is most important.
                    </p>

                    <button className={classes.fade__in}>Shop Now!</button>
                </div>

            </div>
        </div>
    )
}

export default Transition_Image