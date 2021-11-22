import Product from "./Product.jsx";
import { useState } from "react";

function Index() {
  const [products, setProducts] = useState([]);
  const handleClick = async () => {
    let response = await fetch("https://fakestoreapi.com/products?limit=5");
    let res = await response.json();
    setProducts(res);
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={handleClick}>
        Show Products
      </button>
      <div className="products row">
        {products.length ? (
          products.map((item) => (
            <div className="m-2 col-lg-2 products">
              <Product
                title={item.title}
                description={item.description}
                image={item.image}
                jewelery={item.jewelery}
                price={item.price}
              />{" "}
            </div>
          ))
        ) : (
          <h1>No Product</h1>
        )}
      </div>
    </div>
  );
}

export default Index;
