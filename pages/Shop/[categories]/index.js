import React from 'react'
import { useRouter } from 'next/router'
import Banner from '../../../component/Banner';


const dummyData = {
    'categories': ['bag', 'vacuum', 'console', 'game'],
    'bag': {
        'image': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
    },
    'vacuum': {},
}

const Category = () => {
    const router = useRouter();


    console.log(router)
    return (
        <>

            {dummyData.categories.includes(router.query.categories) ?


                <Banner name={router.query.categories} img={'https://images.unsplash.com/photo-1653427895631-f73d88ecb5a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072'} />


                :

                <div>not Found</div>


            }
        </>
    )
}

export default Category