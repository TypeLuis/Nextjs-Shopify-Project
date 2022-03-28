import classes from './Card.module.scss'
import useEffect from 'react'

const Card = () => {
    return (
        <div className={classes.main}>
            <div className={classes.product__image}>
                <img src='https://images.unsplash.com/photo-1648326311535-21895c185fbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />
            </div>
            <div className={classes.product__title}>
                Product title display
            </div>
            <div className={classes.product__price}>
                <span>
                    $74.00
                </span>
            </div>

        </div>
    )
}

export default Card