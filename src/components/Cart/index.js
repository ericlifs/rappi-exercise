import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { checkoutProducts } from 'actions/cart';

import getQuantityInCart from 'selectors/getQuantityInCart';
import getProductsInCart from 'selectors/getProductsInCart';
import getTotalInCart from 'selectors/getTotalInCart';

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
    })
  }

  getCartProducts() {
    const { cartProducts, total, checkoutProducts } = this.props;

    return (
      <CartList opened={this.state.opened}>
        <ProductsList>
          {cartProducts.map(product => <CartProduct key={product.id} product={product}/>)}
        </ProductsList>
        <CheckoutButton onClick={() => checkoutProducts()}>Comprar ({ total.toFixed(2) })</CheckoutButton>
      </CartList>
    )
  }

  render() {
    const { quantity } = this.props;

    return (
      <CartWrapper>
        <CartButtonWrapper onClick={this.toggleCart}>Comprar ({ quantity })</CartButtonWrapper>
        {this.getCartProducts()}
      </CartWrapper>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  quantity: getQuantityInCart(cart),
  total: getTotalInCart(cart),
  cartProducts: getProductsInCart(cart)
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    checkoutProducts
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);