import React from 'react'

const Card = ({char, onClick, items}) => {
  
  return (
    <div onClick={onClick} className='cards'>
        <h1>{char.toUpperCase()}</h1>
        <div className="char-items">
  {items.map((item) => (
    <p className="char-item" key={item.id}> 
      {item.id}
      {item.points}
    </p>
  ))}
</div>
    </div>
  )
}

export default Card