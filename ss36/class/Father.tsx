import React, { useContext } from 'react'
import { Text } from '../../../App'

const Father = () => {
    const save=useContext(Text)
    console.log(save)
    return (
        <div>
            <h2>Ba</h2>
        </div>
    )
}

export default Father