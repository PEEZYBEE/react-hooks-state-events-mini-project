import React from "react";

function CategoryFilter({ categories = [], selectedCategory = "All", onCategoryClick = () => {} }) {
  const buttons = categories.map((category) => (
    <button
      key={category}
      className={category === selectedCategory ? "selected" : ""}
      onClick={() => onCategoryClick(category)}
    >
      {category}
    </button>
  ));

  return <div className="categories">{buttons}</div>;
}

export default CategoryFilter;