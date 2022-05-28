import classes from './Header.module.scss'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useEffect } from 'react'
import { style } from '@mui/system'

const Header = () => {

    const router = useRouter()

    const showDetailsHandler = (link) => {
        router.push(`/${link}`)
    }
    useEffect(()=> {

        console.log(router.pathname)

    })
    const textColor = router.pathname ==='/' ? 'White' : 'Black'

    const style = {
        'color' : textColor
    }



    return (
        // <div className={classes.mainHeader}>
        //     <div>
        //         Free Shipping on All Orders Over $100
        //     </div>
        <nav className={classes.header}>
            <ul style={style}>
                <li>
                    <span onClick={()=>{showDetailsHandler('')}} >Home</span>
                </li>
                <li>
                    <span onClick={()=>{showDetailsHandler('Shop')}}>Shop</span>
                </li>
                <li>
                    <span onClick={()=>{showDetailsHandler('Features')}}>Features</span>
                </li>
                <li>
                    <span onClick={()=>{showDetailsHandler('About')}}>About</span>
                </li>
                <li>
                    <span onClick={()=>{showDetailsHandler('Blog')}}>Blog</span>
                </li>
                <li>
                    <span onClick={()=>{showDetailsHandler('Subscribe')}}>Subscribe</span>
                </li>
            </ul>
        </nav>
        // </div>
    )
}

export default Header