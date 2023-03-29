import React, { useState } from "react";
import ItemDetails from "./ItemDetails";

const ItemCategory = ({ title, items, points, onItemClick }) => {
    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div className="item-category">
                <button onClick={handleToggle} className={isActive ? 'uncollapsed' : 'collapsed'}>
                    <h1 className="specific-category">{title}</h1>
                </button>
                {isActive &&
                    <div className="item-selection">
                        {items.map((item) => (
                            <ItemDetails key={item} itemId={item} points={points} onClick={onItemClick} />
                        ))}
                    </div>}
            </div>
        </>
    );
};


export default ItemCategory;
