import classes from './Header.module.scss'
import Link from 'next/link'

const Header = () => {


    return (
        // <div className={classes.mainHeader}>
        //     <div>
        //         Free Shipping on All Orders Over $100
        //     </div>
        <nav className={classes.header}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/Shop'>Shop</Link>
                </li>
                <li>
                    <Link href='/Features'>Features</Link>
                </li>
                <li>
                    <Link href='/About'>About</Link>
                </li>
                <li>
                    <Link href='/Blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/Subscribe'>Subscribe</Link>
                </li>
            </ul>
        </nav>
        // </div>
    )
}

export default Header