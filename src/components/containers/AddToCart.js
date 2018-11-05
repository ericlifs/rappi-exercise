import React from 'react'

import { connect } from 'react-redux'
import { addProductToCart } from 'actions/cart'

import AddToCart from 'components/AddToCart'

const AddToCartContainer = props => <AddToCart {...props} />

const mapDispatchToProps = {
  addProductToCart
}

export default connect(
  null,
  mapDispatchToProps
)(AddToCartContainer)
