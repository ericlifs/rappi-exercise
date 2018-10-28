import React from 'react';
import { connect } from 'react-redux';

import getSortedProducts from 'selectors/getSortedProducts';

import SortBar from 'components/SortBar';
import Product from './Product';

import { ProductsListWrapper, ProductsWrapper, NoResults } from './styled';

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

const ProductsList = ({ filteredProducts, categoryProducts }) => (
  <ProductsWrapper>
    {(categoryProducts || []).length > 0 && <SortBar/>}
    {getProductsContent(filteredProducts)}
  </ProductsWrapper>
);

const mapStateToProps = ({ products }) => ({
  categoryProducts: products.categoryProducts,
  filteredProducts: getSortedProducts(products)
});

export default connect(mapStateToProps)(ProductsList);