import React, { useState } from "react";
import ItemCategory from "./ItemCategory";

const SetCategory = ({ sets }) => {
    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
    setIsActive(!isActive);
    };

    return (
    <>
    <div className="set-category">
        <button onClick={handleToggle} className={isActive ? 'uncollapsed' : 'collapsed'}>
            <h1>SETS</h1>
        </button>
    </div>
    {isActive && 
        <div className="set-selection">
            {sets.map((set) => (
                <ItemCategory key={set.title} title={set.title} items={set.items}/>
            ))}
        </div>}
    </>
    );
};

export default SetCategory;
