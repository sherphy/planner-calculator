import React from 'react'

const Card = ({char, onClick, items}) => {
  
  return (
    <div onClick={onClick} className='cards'>
        <h1>{char.toUpperCase()}</h1>
        {items.map(item => (
          <p>{item}</p>
        ))}
    </div>
  )
}

export default Card