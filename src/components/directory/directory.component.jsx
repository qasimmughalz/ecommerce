import React from "react";
import CategoryItem from "../category-item/category-item.coponent";
import "./directory.style.scss";
const Directory = ({categories}) => {
  return (
    <div className="directory-container">
      <CategoryItem categories={categories} />
    </div>
  );
};

export default Directory;
