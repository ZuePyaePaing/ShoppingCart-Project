import React from "react";
import { useLocation } from "react-router-dom";
import SearchChild from "./SearchChild";
const Search = () => {
  const { state } = useLocation();

  return (
    <div className=" flex flex-wrap gap-10 justify-center mt-10">
      {state?.map((item) => {
        return <SearchChild key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Search;
