import React, { useState } from "react";
import "./Search.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Search = (item) => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <FoodDisplay category={category} />
    </div>
  );
};

export default Search;
