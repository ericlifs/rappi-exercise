import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import filterAndSortProducts from 'selectors/filterAndSortProducts';

import Product from './Product';
import SortBar from 'components/SortBar';
import FilterBar from 'components/FilterBar';

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
      </Fragment>
    )}
    {getProductsContent(products || filteredProducts)}
  </ProductsWrapper>
);

const mapStateToProps = ({ products, ui }) => ({
  filteredProducts: filterAndSortProducts(products),
  categoryProducts: products.categoryProducts,
  menuOpened: ui.menuOpened
});

export default connect(mapStateToProps)(ProductsList);