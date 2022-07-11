import { useEffect, useState } from 'react'
import MoleHill from '../molehill.png'

function EmptySlot(props){

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src={MoleHill} />
        </div>
    )
}
export default EmptySlot