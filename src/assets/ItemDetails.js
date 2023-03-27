import React, { useState, useEffect } from "react";
import axios from "axios";

const region = "gms"; // Replace with your desired region
const version = "234"; // Replace with your desired version

export default function ItemDetails({ itemId, points, onClick}) {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    async function fetchItemData() {
      try {
        const response = await axios.get(
          `https://maplestory.io/api/${region}/${version}/item/${itemId}/name`
        );
        setItemData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchItemData();
  }, [itemId]);

  return (
    <>
      {itemData ? (
        <div
          className="item-details" onClick={onClick} data-points={points} data-item={itemId}
          style={{ display: "flex", alignItems: "center", margin: "0.5em 0" }}>
          <img
            src={`https://maplestory.io/api/${region}/${version}/item/${itemId}/icon`}
            alt={itemData.name}
          />
          <span style={{ marginLeft: "10px" }}>{itemData.name}</span>
          <span style={{ marginLeft: "auto", color: "#F1919B" }}>{points}</span>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

ItemDetails.defaultProps = {
  points: 5,
};
