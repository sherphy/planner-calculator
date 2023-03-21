import React, { useState, useEffect } from "react";
import './Characters.css'

const Characters = () => {
    const [ign, setIgn] = useState('');
    const [chars, setChars] = useState([]);
    const [items, setItems] = useState([]);

    //check if there are any stored characters in localStorage
    useEffect(() => {
        const storedChars = JSON.parse(localStorage.getItem("characters"));
        if (storedChars) {
            setChars(storedChars)
        }
    }, []);    

    const handleSubmit = (e) => {
        e.preventDefault();
        //when submitting an ign, it gives the character an ign 
        //and then sets the character
        if (ign) {
            const updatedChars = [...chars, ign];
            setChars(updatedChars);
            localStorage.setItem("characters",JSON.stringify(updatedChars));
            setIgn("");
        }
    }

    const handleCharSelect = (ign) => {
        const ignItems = JSON.parse(localStorage.getItem(ign)) || [];
        const updatedItems = [...ignItems, items];
        setItems(updatedItems);
    }
    
    return <>
        <div className="characters">
            {chars.length > 0 && 
                chars.map((ign) => (
                <div className="cards" key="ign" onClick={() => handleCharSelect(ign)}>
                    <h1>{ign.toUpperCase()}</h1>
                    <div className="char-items">
                        {items.map((item) => (
                            <p className="char-item" key={item.id}> 
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            ))}

            <div id="add-char" className="cards">
                <form onSubmit={handleSubmit}>
                <input type="text" value={ign} placeholder="Character Name" onChange={(e)=> setIgn(e.target.value)}/>
                <button type="submit">Add</button>
                </form>
            </div>
            {/* <div id="calculate" className="cards">
                Calculate
            </div> */}
        </div>
    </>;
};

export default Characters;
