import React from 'react'
import ProductPage from '../component/Product_Page/ProductPage'
import Reviews from '../component/Reviews/Reviews'
import TextDiv from '../component/TextDiv'
import Right from '../component/Overlap_Images/Right'
import Left from '../component/Overlap_Images/Left'

const About = () => {
    return (
        <div>

            <ProductPage />
            <Reviews />
            <TextDiv />
            <Right />
            <Left />
            <Right />
            {/* <Reviews /> */}
        </div>
    )
}

export default About