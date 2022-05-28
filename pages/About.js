import React from 'react'
import ProductPage from '../component/Product_Page/ProductPage'
import Reviews from '../component/Reviews/Reviews'
import TextDiv from '../component/TextDiv'
import Right from '../component/Overlap_Images/Right'
import Left from '../component/Overlap_Images/Left'

const About = () => {

    const text = {
        'title': 'Why This Company?',
        'textOne': {
            'title': 'What is Lorem Ipsum?',
            'summary': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        },

        'textTwo': {
            'title': 'What is Lorem Ipsum?',
            'summary': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        },

    }
    return (
        <div>

            <ProductPage />
            <Reviews />
            <TextDiv title={text.title} textOne={text.textOne} textTwo={text.textTwo} />
            <Right />
            <Left />
            <Right />
            {/* <Reviews /> */}
        </div>
    )
}

export default About