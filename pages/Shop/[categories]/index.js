import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Banner from '../../../component/Banner';
import Card from '../../../component/Card';
import classes from './category.module.scss'


const Category = (props) => {
    const router = useRouter();

    const name = router.query.categories

    console.log(props)

    // console.log(dummyData[name].products)
    useEffect(() => {
        console.log(process.env.SITE)

    }, [])
    return (
        <>

            {props.categories.includes(router.query.categories) &&

                <>
                    <Banner name={name} img={props.category.image} />

                    <div className={classes.grid}>


                        {props.category.products ?

                            props.category.products.map((item, i) => {

                                return (
                                    <div className={classes.drip} key={i}>
                                        <Card
                                            name={item.name}
                                            images={item.images}
                                            rating={item.rating}
                                            price={item.price}
                                            category={name}
                                        />
                                    </div>
                                )
                            })


                            :
                            <div className={classes.drip} >
                                <Card
                                    name={'test'}
                                    images={[
                                        'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',

                                        'https://images.unsplash.com/photo-1532236395709-7d70320fec2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1802&q=80',

                                        'https://images.unsplash.com/photo-1597531922242-823dbfca45bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80'
                                    ]}
                                    rating={3.5}
                                    price={600}
                                    category={name}
                                />
                            </div>
                        }

                    </div>

                </>


            }
        </>
    )
}



export const getStaticPaths = async () => {
    const dummyData = {
        'categories': ['bag', 'vaccum', 'console', 'games'],
        'bag': {
            'image': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
        },
        'vaccum': {
            'image': 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        },
        'console': {
            'image': 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
            'products': [
                {
                    'name': 'PS5',
                    'images': [
                        'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',

                        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=814&q=80',

                        'https://images.unsplash.com/photo-1605296830686-5d00d8d69b96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

                        'https://images.unsplash.com/photo-1635048438162-7a31e9648949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'

                    ],
                    'rating': 5,
                    'price': 500
                },

                {
                    'name': 'xbox series S',
                    'images': [
                        'https://images.unsplash.com/photo-1604586362304-e75dda43b915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1640877405140-40265c281c70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1604586409773-61d0738e5aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',

                        'https://images.unsplash.com/photo-1606305321490-0c05711a8fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

                        'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1319&q=80'

                    ],
                    'rating': 4,
                    'price': 300
                },

                {
                    'name': 'Nintendo Switch',
                    'images': [
                        'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1591182136289-67ff16828fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',

                        'https://images.unsplash.com/photo-1612036781124-847f8939b154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1632256347173-298f7407d1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

                        'https://images.unsplash.com/photo-1614925379183-3ce5e634a612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

                    ],
                    'rating': 4,
                    'price': 300
                },

                {
                    'name': 'PS3',
                    'images': [
                        'https://images.unsplash.com/photo-1526510096283-b0b3b6cac327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1661276503896-aa8b017f8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

                        'https://images.unsplash.com/photo-1654557515995-74507873a12d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',

                    ],
                    'rating': 4.2,
                    'price': 100
                },
            ]
        },
        'games': {
            'image': 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=647&q=80'
        }
    }
    const paths = dummyData.categories.map((item, i) => {
        console.log(item)
        return {
            // 'categories' key has to be the same name as dynamic file name
            params: { 'categories': item }
        }
    })

    return {
        'paths': paths,
        // if a user goes to a dynamic path that doesn't exist it'll go to 404
        'fallback': false
    }
}


export const getStaticProps = async (context) => {
    const dummyData = {
        'categories': ['bag', 'vaccum', 'console', 'games'],
        'bag': {
            'image': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
        },
        'vaccum': {
            'image': 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        },
        'console': {
            'image': 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
            'products': [
                {
                    'name': 'PS5',
                    'images': [
                        'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',

                        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=814&q=80',

                        'https://images.unsplash.com/photo-1605296830686-5d00d8d69b96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

                        'https://images.unsplash.com/photo-1635048438162-7a31e9648949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'

                    ],
                    'rating': 5,
                    'price': 500
                },

                {
                    'name': 'xbox series S',
                    'images': [
                        'https://images.unsplash.com/photo-1604586362304-e75dda43b915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1640877405140-40265c281c70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1604586409773-61d0738e5aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',

                        'https://images.unsplash.com/photo-1606305321490-0c05711a8fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

                        'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1319&q=80'

                    ],
                    'rating': 4,
                    'price': 300
                },

                {
                    'name': 'Nintendo Switch',
                    'images': [
                        'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1591182136289-67ff16828fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',

                        'https://images.unsplash.com/photo-1612036781124-847f8939b154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1632256347173-298f7407d1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

                        'https://images.unsplash.com/photo-1614925379183-3ce5e634a612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

                    ],
                    'rating': 4,
                    'price': 300
                },

                {
                    'name': 'PS3',
                    'images': [
                        'https://images.unsplash.com/photo-1526510096283-b0b3b6cac327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

                        'https://images.unsplash.com/photo-1661276503896-aa8b017f8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

                        'https://images.unsplash.com/photo-1654557515995-74507873a12d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',

                    ],
                    'rating': 4.2,
                    'price': 100
                },
            ]
        },
        'games': {
            'image': 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=647&q=80'
        }
    }

    const categoryContext = context.params.categories
    const category = dummyData[categoryContext]

    return {
        'props': {
            'categories': dummyData.categories,
            'category': category
        },
    }
}

export default Category