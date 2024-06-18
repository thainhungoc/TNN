import React, { useContext } from 'react'
import { Text } from '../../../App'

const Son = () => {
    const save = useContext(Text)
    console.log(save)
    return (
        <div>
            <h2>Con</h2>
        </div>
    )
}

export default Son