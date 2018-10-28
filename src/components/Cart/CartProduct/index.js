import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addProductToCart, removeProductFromCart, setQuantityOfProduct } from 'actions/cart';

import {
  CartProductColumn,
  CartProductInfo,
  CartProductOperation,
  CartProductQuantity,
  CartProductWrapper,
  ProductQuantity
} from './styled';

class CartProduct extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0
    };

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  static getDerivedStateFromProps(props) {
    return {
      quantity: props.product.quantity
    }
  }

  handleQuantityChange(event) {
    const { product, removeProductFromCart, setQuantityOfProduct } = this.props;
    const quantity = Number(event.target.value);

    if (!quantity) {
      return removeProductFromCart(product);
    }

    return setQuantityOfProduct(product, quantity);
  }

  render() {
    const { product } = this.props;
    const { quantity } = this.state;

    return (
      <CartProductWrapper>
        <CartProductColumn>
          <CartProductInfo>{product.name}</CartProductInfo>
          <CartProductInfo>{product.price}</CartProductInfo>
        </CartProductColumn>
        <CartProductQuantity>
          <CartProductOperation onClick={() => this.props.addProductToCart(product)}>+</CartProductOperation>
          <ProductQuantity type='number' value={quantity} onChange={this.handleQuantityChange}/>
          <CartProductOperation onClick={() => this.props.removeProductFromCart(product)}>-</CartProductOperation>
        </CartProductQuantity>
      </CartProductWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addProductToCart,
    removeProductFromCart,
    setQuantityOfProduct,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(CartProduct);