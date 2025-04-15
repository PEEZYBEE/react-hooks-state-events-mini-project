import React from "react";

function CategoryFilter({ categories = [], selectedCategory, onCategoryClick }) {
  const buttons = categories.map((category) => (
    <button 
      key={category}
      className={category === selectedCategory ? "selected" : null}
      onClick={() => onCategoryClick(category)}
    >
      {category}
    </button>
  ));

  return <div className="categories">{buttons}</div>;
}

export default CategoryFilter;


