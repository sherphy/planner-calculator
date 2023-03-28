import React, { useState } from "react";
import ItemCategory from "./ItemCategory";

const SetCategory = ({ sets, onClick }) => {
    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
    setIsActive(!isActive);
    };

    return (
    <>
    <div className="set-category">
        <button onClick={handleToggle} className={isActive ? 'uncollapsed' : 'collapsed'}>
            <h1>SETS (25 points)</h1>
        </button>
    </div>
    {isActive && 
        <div className="set-selection">
            {sets.map((set) => (
                // null points if set. do set points calculation differently
                <ItemCategory key={set.title} title={set.title} items={set.items} points={''} onItemClick={onClick(set)}/>
            ))}
        </div>}
    </>
    );
};

export default SetCategory;
