import React from "react";
import './Characters.css'

const Characters = () => {
    
    return <>
        <div className="characters">
            <div id="char-1" className="cards">
                Character 1
            </div>
            <div id="char-2" className="cards">
                Character 2
            </div>
            <div id="char-3" className="cards">
                Character 3
            </div>
            <div id="char-4" className="cards">
                Character 4
            </div>
            <div id="add-char" className="cards">
                Add Character
            </div>
            <div id="calculate" className="cards">
                Calculate
            </div>
        </div>
    </>;
};

export default Characters;
