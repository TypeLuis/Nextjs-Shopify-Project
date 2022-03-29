// import { client } from '../utils/shopify-client'
import classes from '../styles/Home.module.scss'
import cardClass from '../component/Card.module.scss'
import { useEffect } from 'react'
import Left from '../component/Overlap_Images/Left';
import Right from '../component/Overlap_Images/Right';
import Transition_Image from '../component/Transition_Image';
import Card from '../component/Card';

const HomePage = (props) => {
  useEffect(()=>{
    const slider = document.getElementsByClassName('slider')


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
            for(let element of entry.target.childNodes){
              // You can import multiple module.scss classes, each import are still separate in classes
              element.classList.remove(cardClass.appear)
            }
          }
          else {
            // Element is below viewport
            return
          }
        }
        else {

          for(let element of entry.target.childNodes){
            element.classList.add(cardClass.appear)
          }
        }
      })
    }, appearOptions)
    
    appearOnScroll.observe(slider[0])

    // for (let slide of slider) {
    // }
  }, [])
  
  return (
    <div className={classes.home_body}>
      <div>

        <div className={classes.homeDisplay}>
          <img src='https://images.unsplash.com/photo-1590992133988-6ffb251c607e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1362&q=80' />
        </div>
      </div>

      <Left />

      <Right />

      <Right />

      <Left />

      {/* <Card /> */}

      <Transition_Image />

      <Right />

        <Card />
      <Left />

      <Right />

      <Left />


      <div className={`${classes.test} slider`}>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Right />

      <Left />

      {/* <div className={classes.homeDisplay}>
        <img src='https://images.unsplash.com/photo-1590992133988-6ffb251c607e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1362&q=80' />
      </div> */}






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