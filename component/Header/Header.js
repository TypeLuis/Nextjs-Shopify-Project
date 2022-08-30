import classes from './Header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
// import { style } from '@mui/system'

const Header = () => {

    const router = useRouter()

    const navigator = (link) => {
        router.push(`/${link}`)
    }

    const navigatorDropdown = (main, link) => {
        router.push(`/${main}/${link}`)
        // router.push(`/${main}/${link}`)
    }

    useEffect(() => {

        console.log(router.pathname)

    })
    const textColor = router.pathname === '/' ? 'White' : 'Black'

    const style = {
        'color': textColor
    }



    return (
        // <div className={classes.mainHeader}>
        //     <div>
        //         Free Shipping on All Orders Over $100
        //     </div>
        <nav className={classes.header}>
            <ul style={style}>
                <li>
                    <span onClick={() => { navigator('') }} >Home</span>
                </li>
                <li className={classes.dropdown}>
                    <span onClick={() => { navigator('Shop') }}>Shop</span>

                    <div className={classes.dropdownContent}>
                        <span onClick={() => { navigatorDropdown('Shop', 'bag') }}>Bag</span>

                        <span onClick={() => { navigatorDropdown('Shop', 'vacuum') }}>Vacuum</span>

                        <span onClick={() => { navigatorDropdown('Shop', 'console') }}>Console</span>

                        <span onClick={() => { navigatorDropdown('Shop', 'games') }}>Games</span>
                    </div>
                </li>
                <li>
                    <span onClick={() => { navigator('Features') }}>Features</span>
                </li>
                <li>
                    <span onClick={() => { navigator('About') }}>About</span>
                </li>
                <li>
                    <span onClick={() => { navigator('Blog') }}>Blog</span>
                </li>
                <li>
                    <span onClick={() => { navigator('Subscribe') }}>Subscribe</span>
                </li>
            </ul>
        </nav>
        // </div>
    )
}

export default Header