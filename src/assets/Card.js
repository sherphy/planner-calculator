import React from 'react'
import ItemDetails from './ItemDetails'

let eventDays = 28;

const Card = ({ char, onClick, items, onItemDelete }) => {

  const totalPoints = items.reduce((acc, item) => {
    const points = parseInt(item.points);
    //for the ones in set that have no value
    if (!isNaN(points)) {
      return acc + points;
    } else {
      return acc;
    }
  }, 0);

  return (
    <div onClick={onClick} className='card-container'>
      <div className="card-title">
        <h2>{char.toUpperCase()}</h2>
        <h3 style={{ color: 'rgb(241, 145, 155)' }}>Total Points: {totalPoints}</h3>
        <h3 style={{ color: 'rgb(241, 145, 155)' }}>Average points per day: {Math.ceil(totalPoints / eventDays)}</h3>
      </div>

      <div className="char-items">
        {items.map((item) => (
          <ItemDetails key={item.id} itemId={item.id} points={item.points} onClick={() => onItemDelete(item.id)}
            // for items in a set
            className={item.title.includes("Set") ? 'item-set' : 'not-item-set'}/>
        ))}
      </div>
    </div>
  )
}

export default Card