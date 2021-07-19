import CollectonsOverview from "../../components/collections-overview/collections-overview.component";
import React from "react";

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      <CollectonsOverview />
    </div>
  );
};

export default ShopPage;
