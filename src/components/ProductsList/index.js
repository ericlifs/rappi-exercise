import React from 'react';
import { connect } from 'react-redux';

import getSortedProducts from 'selectors/getSortedProducts';

import SortBar from 'components/SortBar';
import Product from './Product';

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
    {(categoryProducts || []).length > 0 && <SortBar/>}
    {getProductsContent(products || filteredProducts)}
  </ProductsWrapper>
);

const mapStateToProps = ({ products, ui }) => ({
  categoryProducts: products.categoryProducts,
  filteredProducts: getSortedProducts(products),
  menuOpened: ui.menuOpened
});

export default connect(mapStateToProps)(ProductsList);