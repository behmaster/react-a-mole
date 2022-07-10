import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'



function MoleContainer(props){
// const displayMole = false
// theMole 
// ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> 
// ! <EmptySlot toggle={setTheMole} />
    return (
        <div>
            <h2> Mole Container </h2>
            <Mole />
        </div>
    )
}
export default MoleContainer