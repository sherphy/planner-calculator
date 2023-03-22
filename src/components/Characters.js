import React, { useState, useEffect } from "react";
import Card from '../assets/Card';
import './Characters.css';

const Characters = () => {

    //create new character
    const [newChar, setnewChar] = useState('');
    //array of characters
    const [chars, setChars] = useState([]);
    //click specific character
    const [selectedChar, setSelectedChar] = useState(null);
    //items belonging to particular character
    const [charItems, setCharItems] = useState([]);
    //clicking an item 
    const [selectedItem, setSelectedItem] = useState(null);

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
        if (newChar) {
            const updatedChars = [...chars, newChar];
            setChars(updatedChars);
            localStorage.setItem("characters",JSON.stringify(updatedChars));
            // give the new character an empty array of items
            localStorage.setItem(`${newChar}items`,JSON.stringify([]));
            setnewChar("");
        }
    }

    // get the items for the selected character from localStorage
    const getCharItems = (selectedChar) => {
        const storedItems = JSON.parse(localStorage.getItem(`${selectedChar}items`,JSON.stringify([])));
        return storedItems || [];
    }

    const addItems = (selectedChar, newItem) => {
        const storedItems = getCharItems(selectedChar);
        const updatedItems = [...storedItems, newItem];
        localStorage.setItem(`${selectedChar}items`,JSON.stringify(updatedItems));
        setCharItems(updatedItems);
      }

    const handleItems = (itemClicked) => {
        addItems(selectedChar, itemClicked);
        // deleteItems(char,item)
    }

    return (
      <>
        <div className="characters">
          {chars.length > 0 &&
            chars.map((char) => (
              <Card
                char={char}
                key={char}
                items={getCharItems(char)}
                onCharClick={() => setSelectedChar(char)
                }
              />
            ))}
            {selectedChar &&
              <>
              {console.log(selectedChar)}
              </>
            }

          <div id="add-char" className="cards">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newChar}
                placeholder="Character Name"
                onChange={(e) => setnewChar(e.target.value)}
              />
              <button type="submit">Add</button>
            </form>
          </div>
          {/* <div id="calculate" className="cards">
                Calculate
            </div> */}
        </div>
      </>
    );
};

export default Characters;
