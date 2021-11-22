import React from "react";
import { Header, Main, Footer } from "./../../Layout";
import Product from "../../components/Products/Product";

export default function Index() {
  return (
    <div>
      <Header />
      <Main>
        <Product />
      </Main>
      <Footer />
    </div>
  );
}
