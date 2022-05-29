// import { client } from '../utils/shopify-client'
import classes from '../styles/Home.module.scss'
import cardClass from '../component/Card.module.scss'
import { useEffect } from 'react'
import Left from '../component/Overlap_Images/Left';
import Right from '../component/Overlap_Images/Right';
import Transition_Image from '../component/Transition_Image';
import Card from '../component/Card';
import Main_Carousel from '../component/Main_carousel/Main_Carousel';
import Reviews from '../component/Reviews/Reviews';
import TextDiv from '../component/TextDiv';


const HomePage = (props) => {



  const observe = (className) => {

    const sliders = document.getElementsByClassName('slider')


    const appearOptions = {
      threshold: 0,
      rootMargin: "-50px 0px"
    }

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {

      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          if (entry.boundingClientRect.top > 0) {
            // Element is above the viewport
            // get's all the childNodes from the horizontal Scrolling Element
            for (let element of entry.target.childNodes) {
              // You can import multiple module.scss classes, each import are still separate in classes
              element.classList.remove(className)
            }
          }
          else {
            // Element is below viewport
            return
          }
        }
        else {

          for (let element of entry.target.childNodes) {
            element.classList.add(className)
          }
        }
      })
    }, appearOptions)

    for (let slider of sliders) {

      appearOnScroll.observe(slider)
    }

  }
  useEffect(() => {
    observe(cardClass.appear)
  }, [])

  return (
    <div className={classes.home_body}>
      {/* <div>

        <div className={classes.homeDisplay}>
          <img src='https://images.unsplash.com/photo-1648522954037-d3d7a51069ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80' />
        </div>
      </div> */}

      <Main_Carousel />

      <div className={`${classes.test} slider`}>

        {[...Array(10).keys()].map((item) => {

          return (
            <>

              <Card slider={true} />
            </>
          )
        })}
      </div>

      <TextDiv

        bgColor='black'

        color='white'

        textOne={{
          'title': 'What is Lorem Ipsum?',
          'summary': 'We combine parent-friendly features with simplicity and style to create a diaper bag system that helps with life’s messy moments. Through patent-pending design, and stylish functionality, we allow parents everywhere to tackle the chaos of parenthood with a little less mess'
        }}

      />


      <Transition_Image />

      {/* <Right /> */}

      <Card />
      <Card />
      <Left />

      <Right />

      <Left />

      <TextDiv

        bgColor='black'
        color='white'
        textOne={{
          'title': 'Subscribe to save 10% on your first order!',
          'summary': 'Get exclusive access to VIP Ayla & Co pricing.'
        }}

      />



      <div className={`${classes.test} slider`}>

        {[...Array(10).keys()].map((item) => {

          return (
            <>

              <Card slider={true} />
            </>
          )
        })}
      </div>






    </div>
  )
}

export default HomePage


// export const getServerSideProps = async (context) => {
//   const products = await client.product.fetchAll(); // Fetch product

//   const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page

//   const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any

//   return {
//     props: {
//       infos: JSON.parse(JSON.stringify(infos)),
//       policies: JSON.parse(JSON.stringify(policies)),
//       products: JSON.parse(JSON.stringify(products)),
//     },
//   };
// };