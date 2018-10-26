import React from 'react'

import CategoryItem from './CategoryItem';

import info from './categories.json'

import { CategoriesMenuWrapper } from './styled';

const CategoriesMenu = () => (
  <CategoriesMenuWrapper>
    {info.categories.map(category => (
      <CategoryItem key={category.id} category={category}/>
    ))}
  </CategoriesMenuWrapper>
);

export default CategoriesMenu;