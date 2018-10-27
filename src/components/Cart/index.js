import React from 'react';
import { connect } from 'react-redux';

import getQuantityInCart from 'selectors/getQuantityInCart';
import getProductsInCart from 'selectors/getProductsInCart';

import CartProduct from './CartProduct';

import { CartWrapper, CartButtonWrapper, CartList, ProductsList, CheckoutButton } from './styled';

class Cart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    };

    this.toggleCart = this.toggleCart.bind(this);
  }

  static getDerivedStateFromProps(props) {
    if (!props.quantity) {
      return {
        opened: false
      }
    }
  }

  toggleCart() {
    this.setState({
      opened: !this.state.opened
    })
  }

  getCartProducts() {
    const { cartProducts } = this.props;

    return (
      <CartList opened={this.state.opened}>
        <ProductsList>
          {cartProducts.map(product => <CartProduct key={product.id} product={product}/>)}
        </ProductsList>
        <CheckoutButton>Comprar</CheckoutButton>
      </CartList>
    )
  }

  render() {
    const { quantity } = this.props;

    return (
      <CartWrapper>
        <CartButtonWrapper onClick={this.toggleCart}>Carrito ({ quantity })</CartButtonWrapper>
        {this.getCartProducts()}
      </CartWrapper>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  quantity: getQuantityInCart(cart),
  cartProducts: getProductsInCart(cart)
});

export default connect(mapStateToProps)(Cart);