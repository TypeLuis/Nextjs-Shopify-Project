// import { client } from '../utils/shopify-client'
import classes from '../styles/Home.module.scss'
import Slider from "react-slick";
import Left from '../component/Overlap_Images/Left';
import Right from '../component/Overlap_Images/Right';
// import "~slick-carousel/slick/slick.css";

const HomePage = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // console.log(classes)
  return (
    <div>
      <div>

        <div className={classes.homeDisplay}>
          <img src='https://images.unsplash.com/photo-1590992133988-6ffb251c607e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1362&q=80' />
        </div>
      </div>

      <Left />

      <Right />

      <Right />

      <Left />


      <div className={classes.homeDisplay}>
        <img src='https://images.unsplash.com/photo-1590992133988-6ffb251c607e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1362&q=80' />
      </div>






    </div>
  )
}

export default HomePage


export const getServerSideProps = async (context) => {
  const products = await client.product.fetchAll(); // Fetch product

  const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page

  const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any 

  return {
    props: {
      infos: JSON.parse(JSON.stringify(infos)),
      policies: JSON.parse(JSON.stringify(policies)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};