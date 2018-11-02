import React from 'react';
import { connect } from 'react-redux';

import { setMenuOpened } from 'actions/ui';
import { checkoutProducts } from 'actions/cart';
import { getQuantityInCart, getProductsInCart, getTotalInCart } from 'selectors/cart';

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

    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.quantity < this.props.quantity) {
      this.setState({
        opened: true
      });
    }
  }

  toggleCart() {
    this.setState({
      opened: !this.state.opened
    }, () => {
      this.props.setMenuOpened(this.state.opened)
    })
  }

  getCartProducts() {
    const { cartProducts, total, checkoutProducts } = this.props;

    return (
      <CartList opened={this.state.opened}>
        <ProductsList>
          {cartProducts.map(product => <CartProduct key={product.id} product={product}/>)}
        </ProductsList>
        <CheckoutButton onClick={() => checkoutProducts()}>Comprar (${ total.toFixed(2) })</CheckoutButton>
      </CartList>
    )
  }

  render() {
    const { quantity } = this.props;
    const buttonText = this.state.opened ? 'Cerrar' : 'Comprar';

    return (
      <CartWrapper>
        <CartButtonWrapper onClick={this.toggleCart}>{buttonText} ({ quantity })</CartButtonWrapper>
        {this.getCartProducts()}
      </CartWrapper>
    );
  }
}

const mapStateToProps = state => ({
  quantity: getQuantityInCart(state),
  total: getTotalInCart(state),
  cartProducts: getProductsInCart(state)
});

const mapDispatchToProps = {
  checkoutProducts,
  setMenuOpened
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);