import "./Selection.css";
import React from "react";
import ItemCategory from "../assets/ItemCategory";
import ItemSetCategory from "../assets/ItemSetCategory"

const Selection = ({onSelectionClick}) => {

  const handleItemClick = (e) => {
    const itemClicked = e.target.closest('div');
    const points = itemClicked.dataset.points;
    const itemId = itemClicked.dataset.item;
    const title = itemClicked.parentElement.parentElement
    .querySelector('.specific-category').textContent;
    const newItem = { id: itemId, points: points, title: title};
    console.log(newItem);
    onSelectionClick(newItem);
  };

  const handleSetClick = (set) => {
    const itemIds = set.items;
    const newSet = { id: itemIds, title: set.title};
    console.log(newSet);
    onSelectionClick(newSet);
  }

  return (
    <div className="selection-container">
      <div className="selection-items">
        <ItemSetCategory title="Sets"
        sets= {[
          {
            title:"Bear Pajamas Set",
            items:["1005990", "1005991", "1073635", "1053842", "1703199"],
          },
          {
            title:"Sweetest Dream Set",
            items: ["1005793","1005794","1012740","1053714","1053715","1073539", "1073540", "1703090"]
          }
        ]}
        onClick={(set) => () => handleSetClick(set)}
        />
        <ItemCategory
          title="HATS"
          items={["1005145", "1005459", "1005460", "1005965"]}
          onItemClick={(e) => handleItemClick(e)}
        />
        <ItemCategory
          title="PETS"
          items={["5000736","5000737","5000738","5000979","5000980","5000981"]}
          points={50}
          onItemClick={(e) => handleItemClick(e)}
        />
        {/* <h1 className="set">SET</h1>
        <h1 className="pets">PETS</h1>
        <h1 className="misc">MISC</h1> */}
      </div>
    </div>
  );
};

export default Selection;
