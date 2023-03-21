import "./Selection.css";
import React from "react";
import ItemCategory from "../assets/ItemCategory";
import ItemSetCategory from "../assets/ItemSetCategory"

const Selection = ({onItemClick}) => {

  const handleItemClick = (item) => {
    onItemClick(item);
  };


  return (
    <div className="selection-container">
      <div className="selection-items">
        <ItemSetCategory title="Sets"
        sets= {[
          {
            title:"Bear Pajamas Set",
            items:["1005990", "1005991", "1073635", "1053842", "1703199"],
          },

        ]}
        />
        <ItemCategory
          title="HATS"
          items={["1005145", "1005459", "1005460", "1005965"]}
          onItemClick={handleItemClick}
        />
        <ItemCategory
          title="PETS"
          items={["5000736","5000737","5000738","5000979","5000980","5000981"]}
          points={50}
        />
        {/* <h1 className="set">SET</h1>
        <h1 className="pets">PETS</h1>
        <h1 className="misc">MISC</h1> */}
      </div>
    </div>
  );
};

export default Selection;
