import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Loader } from "@mantine/core";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className=" flex justify-center h-screen">
        <Loader color="violet" variant="bars" />; 
      </div>
    );
  }
  return (
    <div className=" flex flex-wrap justify-center gap-10 mt-10">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
