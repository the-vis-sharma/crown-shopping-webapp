import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import ShopData from "./shop.data";
import "./shop-page.style.scss";

class ShopPage extends React.Component {
  render() {
    return (
      <div className="shop">
        {ShopData.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
