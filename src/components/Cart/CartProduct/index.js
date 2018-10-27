import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addProductToCart } from 'actions/cart';

import {
  CartProductColumn,
  CartProductInfo,
  CartProductOperation,
  CartProductQuantity,
  CartProductWrapper,
  Quantity
} from './styled';

class CartProduct extends React.PureComponent {
  render() {
    const { product } = this.props;

    return (
      <CartProductWrapper>
        <CartProductColumn>
          <CartProductInfo>{product.name}</CartProductInfo>
          <CartProductInfo>{product.price}</CartProductInfo>
        </CartProductColumn>
        <CartProductQuantity>
          <CartProductOperation onClick={() => this.props.addProductToCart(product)}>+</CartProductOperation>
          <Quantity>{product.quantity}</Quantity>
          <CartProductOperation>-</CartProductOperation>
        </CartProductQuantity>
      </CartProductWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addProductToCart
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(CartProduct);