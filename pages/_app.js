import  Footer  from '../component/Footer/Footer'
import Header from '../component/Header/Header'
import HeaderSmall from '../component/Header/HeaderSmall'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <HeaderSmall />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
