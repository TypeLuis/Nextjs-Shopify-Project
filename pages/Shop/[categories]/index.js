import React from 'react'
import { useRouter } from 'next/router'
import Banner from '../../../component/Banner';


const dummyData = {
    'categories': {

    }
}

const Category = () => {
    const router = useRouter();
    console.log(router)
    return (
        <Banner name={router.query.categories} img={'https://images.unsplash.com/photo-1653427895631-f73d88ecb5a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072'} />
    )
}

export default Category