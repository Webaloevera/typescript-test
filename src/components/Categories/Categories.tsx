import React, { useState } from "react";
import "./categories.css";



type ICategoryProps = {
    activeCategory: number | null
    onClickCategory: (i:number | null) => void
    nameCategories: string[]
}

const Categories = ({activeCategory, onClickCategory, nameCategories}:ICategoryProps) => {


  return (
    <div className="categories">
         <p className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>All</p>
      {nameCategories.map((names, i) => {
        return <p key={names + '_' + i} className={activeCategory === i ? 'active' : ''} onClick={() => onClickCategory(i)}>{names}</p>;
      })}
    </div>
  );
};

export default Categories;
