import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { filterAndSortProducts, getCategoryProducts } from 'selectors/products';
import { getMenuOpened } from 'selectors/ui';

import Product from './Product';
import SortBar from 'components/SortBar';
import FilterBar from 'components/FilterBar';
import SearchByTerm from 'components/SearchByTerm';

import { ProductsListWrapper, ProductsWrapper, NoResults, Title } from './styled';

const getProductsContent = products => {
  if (products && products.length) {
    return (
      <ProductsListWrapper>
        {products.map(product => (
          <Product key={product.id} product={product}/>
        ))}
      </ProductsListWrapper>
    )
  }

  return <NoResults>Perdón, no se encontraron productos</NoResults>;
};

const ProductsList = ({ products, title, fullwidth, filteredProducts, menuOpened, categoryProducts }) => (
  <ProductsWrapper fullwidth={fullwidth} menuOpened={menuOpened}>
    {title && <Title>{title}</Title>}
    {(categoryProducts || []).length > 0 && (
      <Fragment>
        <FilterBar/>
        <SortBar/>
        <SearchByTerm/>
      </Fragment>
    )}
    {getProductsContent(products || filteredProducts)}
  </ProductsWrapper>
);

const mapStateToProps = state => ({
  filteredProducts: filterAndSortProducts(state),
  categoryProducts: getCategoryProducts(state),
  menuOpened: getMenuOpened(state)
});

export default connect(mapStateToProps)(ProductsList);