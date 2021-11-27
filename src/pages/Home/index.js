import React from "react";
import SearchProduct from "./../../components/SearchProduct";

import Product from "../../components/Products";

export default function Index() {
  return (
    <div>
      <SearchProduct />
      <Product />
    </div>
  );
}
