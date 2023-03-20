import "./Selection.css";
import React from "react";
import ItemCategory from "../assets/ItemCategory";
import SetCategory from "../assets/SetCategory"

const Selection = () => {
  return (
    <div className="selection-container">
      <div className="selection-items">
        <SetCategory title="Sets"
        sets= {[
          {
            title:"Bear Pajamas Set",
            items:["1005990", "1005991", "1073635", "1053842", "1703199"]
          },

        ]}
        />
        <ItemCategory
          title="HATS"
          items={["1005145", "1005459", "1005460", "1005965"]}
        />
        {/* <h1 className="set">SET</h1>
        <h1 className="pets">PETS</h1>
        <h1 className="misc">MISC</h1> */}
      </div>
    </div>
  );
};

export default Selection;
