import React from 'react'
import './Container.css'

import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'

function Container() {

    const [show, setShow] = useState(false)


    return (
        <>
            <Login setShow={setShow} />

            {
                show && (<Signup setShow={setShow} />)
            }

        </>
    )
}

export default Container