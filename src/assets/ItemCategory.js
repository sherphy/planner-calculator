import React, { useState } from "react";
import ItemDetails from "./ItemDetails";

const ItemCategory = ({ title, items, points, onItemClick}) => {
    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
    setIsActive(!isActive);
    };

    // const handleClick = () => {
    //     onItemClick();
    // }

    return (
    <>
    <div className="item-category">
        <button onClick={handleToggle} className={isActive ? 'uncollapsed' : 'collapsed'}>
            <h1>{title}</h1>
        </button>
    </div>
    {isActive && 
        <div className="item-selection">
            {items.map((item) => (
                <ItemDetails key={item} itemId={item} points={points} onClick={onItemClick}/>
            ))}
        </div>}
    </>
    );
};


export default ItemCategory;
