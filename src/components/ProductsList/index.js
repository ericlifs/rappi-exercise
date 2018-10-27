import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';

import { ProductsListWrapper } from './styled';

const ProductsList = ({ products }) => (
  <ProductsListWrapper>
    {(products || []).map(product => (
      <Product key={product.id} product={product}/>
    ))}
  </ProductsListWrapper>
);

const mapStateToProps = ({ products }) => ({
   products: products.results
});

export default connect(mapStateToProps)(ProductsList);