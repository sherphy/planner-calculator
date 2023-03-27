import React, { useState, useEffect } from "react";
import Card from '../assets/Card';
import './Characters.css';
import ItemDetails from "../assets/ItemDetails";

const Characters = () => {
    const [newChar, setnewChar] = useState('');
    const [chars, setChars] = useState([]);
    const [charItems, setCharItems] = useState([]);
    const [selectedChar, setSelectedChar] = useState(null);
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
        setCharItems(storedItems);
        return storedItems || [];
    }

    const addItems = (selectedChar, newItem) => {
        const updatedItems = [...charItems, newItem];
        localStorage.setItem(`${selectedChar}items`,JSON.stringify(updatedItems));
    }

    const handleItems = (newItem) => {
        addItems(selectedChar, newItem);
        // deleteItems(char,item)
    }

    const handleItemClick = (itemId) => {
        console.log("hi")
        handleItems(itemId);
    }

    const handleAddItem = (item) => {
        const updatedItems = [...charItems, item];
        localStorage.setItem(`${selectedChar}items`, JSON.stringify(updatedItems));
        setCharItems(updatedItems);
      };

    return (
      <>
        <div className="characters">
          {chars.length > 0 &&
            chars.map((char) => (
              <Card
                char={char}
                key={char}
                items={charItems}
                onCharClick={() => setSelectedChar(char)}
                onItemAdd={handleAddItem}
              >
                {/* {selectedChar && (
                  <div id="add-item" className="cards">
                    <ItemDetails onItemAdd={onItemAdd} />
                  </div>
                )} */}
              </Card>
              /* <div className="char-items">
                        {items.map((item) => (
                            <p className="char-item" key={item.id}> 
                                {item}
                            </p>
                        ))}
                    </div> */
            ))}

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
