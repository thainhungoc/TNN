import React, { useContext } from 'react'
import { Text } from '../../../App'

const GrandFather = () => {
    const save = useContext(Text)
    console.log(save)
    return (
        <div>
            <h2>Ông</h2>
        </div>
    )
}

export default GrandFather