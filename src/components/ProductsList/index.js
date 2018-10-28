import React from 'react';
import { connect } from 'react-redux';

import SortBar from 'components/SortBar';
import Product from './Product';

import { ProductsListWrapper, ProductsWrapper, NoResults } from './styled';

const ProductsList = ({ products }) => {
  if (products && products.length) {
    return (
      <ProductsWrapper>
        <SortBar/>
        <ProductsListWrapper>
          {products.map(product => (
            <Product key={product.id} product={product}/>
          ))}
        </ProductsListWrapper>
      </ProductsWrapper>
    )
  }

  return <NoResults>Perdón, no se encontraron productos</NoResults>;
};

const mapStateToProps = ({ products }) => ({
   products: products.results
});

export default connect(mapStateToProps)(ProductsList);