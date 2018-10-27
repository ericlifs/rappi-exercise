import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addProductToCart } from 'actions/cart';

import { AddToCartWrapper } from './styled';

const AddToCart = ({ product, addProductToCart }) => (
  <AddToCartWrapper onClick={() => addProductToCart(product)}>
    Agregar al carrito
  </AddToCartWrapper>
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addProductToCart
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(AddToCart)