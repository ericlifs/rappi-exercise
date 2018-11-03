import React from 'react'
import { connect } from 'react-redux'
import { addProductToCart, removeProductFromCart, setQuantityOfProduct } from 'actions/cart'

import CartProduct from 'components/Cart/CartProduct/index'

const CartProductContainer = props => <CartProduct {...props} />

const mapDispatchToProps = {
  addProductToCart,
  removeProductFromCart,
  setQuantityOfProduct
}

export default connect(
  null,
  mapDispatchToProps
)(CartProductContainer)
