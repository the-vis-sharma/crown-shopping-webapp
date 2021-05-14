import React from "react";

import "./collection-item.style.scss";

const CollectionPreviewItem = ({ name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="add-to-cart">Add to Cart</div>
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">₹ {price}</span>
      </div>
    </div>
  );
};

export default CollectionPreviewItem;
