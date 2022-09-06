import React, { useState, useEffect } from 'react'
import Banner from '../component/Banner'
import Left from '../component/Overlap_Images/Left'
import Right from '../component/Overlap_Images/Right'
import Main_Carousel from '../component/Main_carousel/Main_Carousel'


const Subscribe = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>

            <Banner name={'Subscribe'} img={'https://images.unsplash.com/photo-1653427472957-b3b3f313d719?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'} desc={'A bag built for life'} />

            {seconds} seconds have elapsed since mounting.

            <Left />
            <Right />
            <Main_Carousel />
            <Left />
            <Right />
            <Main_Carousel />

        </>
    )
}

export default Subscribe