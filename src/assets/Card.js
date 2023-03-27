import React from 'react'
import ItemDetails from './ItemDetails'

const Card = ({char, onClick, items}) => {
  
  return (
    <div onClick={onClick} className='cards'>
        <h1>{char.toUpperCase()}</h1>
        <div className="char-items">
          {/* DELETE OLD CODE
  {items.map((item) => (
    <p className="char-item" key={item.id}> 
      {item.points}
    </p>
  ))} */}
  {items
    .map((item) => (
    <ItemDetails key={item.id} itemId={item.id} points={item.points} onClick={e=>console.log(e)}
    />
  ))}
  
</div>
    </div>
  )
}

export default Card