import React from "react";

function CategoryFilter({ categories = [], selectedCategory = "All", onCategoryChange = () => {} }) {
  const buttons = categories.map((category) => (
    <button
      key={category}
      className={category === selectedCategory ? "selected" : ""}
      onClick={() => onCategoryChange(category)}
    >
      {category}
    </button>
  ));

  return <div className="categories">{buttons}</div>;
}

export default CategoryFilter;