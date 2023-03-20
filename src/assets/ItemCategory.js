import React, { useState } from "react";
import ItemDetails from "./ItemDetails";

const ItemCategory = ({ title, items }) => {
    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
    setIsActive(!isActive);
    };

    return (
    <>
    <div className="item-category">
        <button onClick={handleToggle}>{title}</button>
    </div>
    {isActive && 
        <div className="item-selection">
            {items.map((item) => (
                <ItemDetails key={item} itemId={item}/>
            ))}
        </div>}
    </>
    );
};

export default ItemCategory;
