import React from 'react';
import { connect } from 'react-redux';

import { addProductToCart } from 'actions/cart';

import { AddToCartWrapper } from './styled';

const AddToCart = ({ product, addProductToCart }) => (
  <AddToCartWrapper onClick={() => addProductToCart(product)}>
    Agregar al carrito
  </AddToCartWrapper>
);

const mapDispatchToProps = {
  addProductToCart
};

export default connect(null, mapDispatchToProps)(AddToCart)