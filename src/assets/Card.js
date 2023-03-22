import React from 'react'

const Card = ({char, onCharClick, items, onItemAdd}) => {
  
  return (
    <div onClick={onCharClick} className='cards'>
        <h1>{char.toUpperCase()}</h1>
        {items.map(item => (
          <p>{item}</p>
        ))}
    </div>
  )
}

export default Card