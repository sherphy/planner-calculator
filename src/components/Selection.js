import './Selection.css'
import React from 'react'
import ItemCategory from '../assets/ItemCategory'
 

const Selection = () => {

  return (
    <div className='selection-container'>
    <div className="selection-items">
        <ItemCategory title="hats" items={["1005145","1005459",
        "1005460","1005965"]}>
        </ItemCategory>
        {/* <h1 className="set">SET</h1>
        <h1 className="pets">PETS</h1>
        <h1 className="misc">MISC</h1> */}
    </div>
    </div>
  )
}

export default Selection