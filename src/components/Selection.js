import './Selection.css'
import React from 'react'
import ItemDetails from '../assets/ItemDetails'

const Selection = () => {
  return (
    <div className='selection-container'>
    <div className="selection-items">
        <div className="hats">
        <h1>HATS</h1>
        <ItemDetails itemId="1005145"/>
        <ItemDetails itemId="1005459"/>
        <ItemDetails itemId="1005460"/>
        <ItemDetails itemId="1005965"/>
        </div>
        {/* <h1 className="set">SET</h1>
        <h1 className="pets">PETS</h1>
        <h1 className="misc">MISC</h1> */}
    </div>
    </div>
  )
}

export default Selection