import React from "react";
import ProductCardCus from "./ProductCardCus";

const ProductListCus = ({ data }) => {
     return (
          <>
               {data.map((item, index) => (
                    <ProductCardCus item={item} key={index} />
               ))}
          </>
     );
};

export default ProductListCus;
