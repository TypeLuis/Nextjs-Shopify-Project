import { useRouter } from 'next/router'
import React from 'react'

const Admin = () => {
    const router = useRouter()
    const name = router.query.name

    name === process.env.SITE

    return (
        <>

            {name === process.env.SITE &&

                <div>
                    hello adding tests
                </div>

            }
        </>
    )
}

export default Admin