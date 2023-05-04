import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { Badge } from "@mantine/core";
import { HiShoppingBag } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const nav = useNavigate();

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    setLoading(false);
  };
  const filterProduct = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  const formSbmit = (e) => {
    e.preventDefault();
    nav("/search", { state: filterProduct });
  };

  return (
    <div className=" flex justify-around shadow-lg p-6">
      <Link to={"/"}>
        <h2 className=" text-4xl text-violet-900 hover:text-purple-600">
          Comfity
        </h2>
      </Link>
      <div className=" flex gap-4">
        <form onSubmit={formSbmit}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="filled"
            placeholder="Search"
          />
        </form>
        <Link to={"/addtocart"}>
          <div className=" relative">
            <Badge color="violet" className=" absolute bottom-7 left-3">
              {cartItems.length}
            </Badge>
            <HiShoppingBag className=" text-4xl text-violet-800" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
