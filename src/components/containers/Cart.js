import React from 'react'

import { connect } from 'react-redux'

import { setMenuOpened } from 'actions/ui'
import { checkoutProducts } from 'actions/cart'
import { getQuantityInCart, getProductsInCart, getTotalInCart } from 'selectors/cart'

import Cart from 'components/Cart'

const CartContainer = props => <Cart {...props} />

const mapStateToProps = state => ({
  quantity: getQuantityInCart(state),
  total: getTotalInCart(state),
  cartProducts: getProductsInCart(state)
})

const mapDispatchToProps = {
  checkoutProducts,
  setMenuOpened
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
