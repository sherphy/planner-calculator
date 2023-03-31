import React, { useState, useEffect } from "react";
import Card from "../assets/Card";
import Selection from "./Selection.js";
import "./Characters.css";

let setPoints = 25;

const Characters = () => {
    const [newIGN, setNewIGN] = useState("");
    //object of character, has properties of name and items
    const [chars, setChars] = useState([]);
    const [selectedChar, setSelectedChar] = useState("");

    //check if there are any stored characters in localStorage
    useEffect(() => {
        const storedChars = JSON.parse(localStorage.getItem("characters"));
        if (storedChars) {
            setChars(storedChars);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        //when submitting an ign, it gives the character an ign
        //and then sets the character and items
        if (newIGN) {
            const updatedChars = [...chars, { name: newIGN, items: [] }];
            setChars(updatedChars);
            localStorage.setItem("characters", JSON.stringify(updatedChars));
            //refresh
            setNewIGN("");
        }
    };

    const addItems = (newItem) => {
        const updatedChars = chars.map((char) => {
            if (char.name === selectedChar) {
                // check if unique
                let updatedItems;
                //for sets
                if (Array.isArray(newItem.id)) {
                    updatedItems = [...char.items];
                    newItem.id.forEach((itemId, index) => {
                        const itemExists = updatedItems.some((item) => item.id === itemId);
                        if (!itemExists) {
                            //for first item, gives setPoints, otherwise unlisted points
                            const points = index === 0 ? setPoints : "-";
                            updatedItems.push({ id: itemId, points: points, title: newItem.title });
                        }
                    });
                }
                // single items
                else {
                    const itemExists = char.items.some((item) => item.id === newItem.id);
                    // if item already added before
                    if (itemExists) {
                        return char;
                    }
                    // otherwise add the new item 
                    updatedItems = [...char.items, newItem];
                }

                // sort by category
                updatedItems.sort((a, b) => {
                    //if it contains "set" push downwards
                    if (a.title.includes("Set") && !b.title.trim().includes("Set")) {
                        return 1;
                    }
                    else if (!a.title.includes("Set") && b.title.trim().includes("Set")) {
                        return -1;
                    }
                    //if both contain/dont contain space, compare alphabetically
                    else {
                        return a.title.localeCompare(b.title);
                    }
                })

                // update CHOSEN char with new items
                const updatedChar = { ...char, items: updatedItems };
                // update chosen char in array
                const charIndex = chars.findIndex((char) => char.name === selectedChar);
                const updatedChars = [
                    ...chars.slice(0, charIndex),
                    updatedChar,
                    ...chars.slice(charIndex + 1),
                ];
                localStorage.setItem("characters", JSON.stringify(updatedChars));
                return updatedChar;
            } else {
                return char;
            }
        });
        setChars(updatedChars);
    };

    const handleItemDelete = (itemId) => {
        const updatedChars = chars.map((char) => {
            // find the item to delete
            const itemIndex = char.items.findIndex((item) => item.id === itemId);
            // if item exists
            if (itemIndex !== -1) {
                // copy items without the item to delete
                const updatedItems = [
                    ...char.items.slice(0, itemIndex),
                    ...char.items.slice(itemIndex + 1),
                ];
                // update the chosen char in array
                if (char.name === selectedChar) {
                    const updatedChar = { ...char, items: updatedItems };
                    const charIndex = chars.findIndex((char) => char.name === selectedChar);
                    const updatedChars = [
                        ...chars.slice(0, charIndex),
                        updatedChar,
                        ...chars.slice(charIndex + 1),
                    ];
                    localStorage.setItem("characters", JSON.stringify(updatedChars));
                    return updatedChar;
                }
                // otherwise just return the updated char
                else {
                    return { ...char, items: updatedItems };
                }
            }
            return char;
        });
        setChars(updatedChars);
    };

    const handleSelectedItem = (selectedItem) => {
        addItems(selectedItem);
        // deleteItems(char,item)
    };

    return (
        <>
            <Selection onSelectionClick={handleSelectedItem} />
            <div className="characters">
                {chars.length > 0 && (
                    <>
                        {chars.map((char) => (
                            <Card
                                char={char.name}
                                key={char.name}
                                items={char.items}
                                onClick={() => setSelectedChar(char.name)}
                                onItemDelete={(itemId) => handleItemDelete(itemId)}
                            />
                        ))}
                    </>
                )}

                <div id="add-char" className="card-container">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={newIGN}
                            placeholder="Character Name"
                            onChange={(e) => setNewIGN(e.target.value)}
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
}

    export default Characters
