import React from 'react'
import Banner from '../component/Banner'
import Left from '../component/Overlap_Images/Left'
import Right from '../component/Overlap_Images/Right'
import Transition_Image from '../component/Transition_Image'

const Features = () => {
    return (
        <div >

            <Banner name={'Features'} img={'https://i.pinimg.com/originals/5f/08/58/5f085809f2b711643e4eb4974cc03c0e.gif'}  desc={'A bag built for life'}/>

            <Transition_Image />
            <Right />
            <Left />
            <Right />
            <Left />
            <Right />
        </div>
    )
}

export default Features