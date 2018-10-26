import React from 'react'

import CategoryItem from './CategoryItem';

import info from './categories.json'

const CategoriesMenu = () => (
  info.categories.map(category => (
    <CategoryItem key={category.id} category={category}/>
  ))
);

export default CategoriesMenu;