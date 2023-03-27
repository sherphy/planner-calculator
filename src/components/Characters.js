import React, { useState, useEffect } from "react";
import Card from '../assets/Card';
import Selection from './Selection.js'
import './Characters.css';

const Characters = () => {
    const [newIGN, setNewIGN] = useState('');
    //object of character, has properties of name and items 
    const [chars, setChars] = useState([]);
    const [selectedChar, setSelectedChar] = useState("");

    //check if there are any stored characters in localStorage
    useEffect(() => {
        const storedChars = JSON.parse(localStorage.getItem("characters"));
        if (storedChars) {
            setChars(storedChars)
        }
    }, []);
    //CHECK THROUGH FOR ALL THEIR ITEMS AND RENDER ALSO    

    const handleSubmit = (e) => {
        e.preventDefault();
        //when submitting an ign, it gives the character an ign 
        //and then sets the character and items
        if (newIGN) {
            const updatedChars = [...chars, {name: newIGN, items: []}];
            setChars(updatedChars);
            localStorage.setItem("characters",JSON.stringify(updatedChars));
            //refresh
            setNewIGN("");
        }
    }

    const addItems = (newItem) => {
        const updatedChars = chars.map((char) => {
            if (char.name === selectedChar) {
                 // Check if unique
                const itemExists = char.items.some((item) => item.id === newItem.id);
                
                if (itemExists) {
                    return char;
                }
                
                else {
                //add new item to character items
                const updatedItem = [...char.items, newItem];
                //update character with new items
                const updatedChar = {...char, items: updatedItem};
                //replace current character in array 
                const charIndex = chars.findIndex(char => char.name === selectedChar);
                const updatedChars = [...chars.slice(0, charIndex), updatedChar, ...chars.slice(charIndex + 1)];
                localStorage.setItem("characters", JSON.stringify(updatedChars));
                return updatedChar;
                }
            } else {
                return char;
            }
        });
        setChars(updatedChars);
    }

    const handleSelectedItem = (selectedItem) => {
        addItems(selectedItem);
        console.log(selectedItem);
        // deleteItems(char,item)
    }

    return <>
        <Selection onSelectionClick={handleSelectedItem}/>
        <div className="characters">
            {chars.length > 0 && 
            <>
                {chars.map((char) => (
                    <Card
                        char={char.name}
                        key={char.name}
                        items={char.items}
                        onClick={() => setSelectedChar(char.name)}/>
                ))}
            </>
        }

            <div id="add-char" className="cards">
                <form onSubmit={handleSubmit}>
                <input type="text" value={newIGN} placeholder="Character Name" onChange={(e)=> setNewIGN(e.target.value)}/>
                <button type="submit">Add</button>
                </form>
            </div>
            {/* <div id="calculate" className="cards">
                Calculate
            </div> */}
        </div>
    </>
};

export default Characters;
