import React from 'react'

import {
  CartProductColumn,
  CartProductInfo,
  Operation,
  CartProductQuantity,
  CartProductWrapper,
  ProductQuantity
} from './styled'

export default class CartProduct extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 0
    }

    this.handleQuantityChange = this.handleQuantityChange.bind(this)
  }

  static getDerivedStateFromProps(props) {
    return {
      quantity: props.product.quantity
    }
  }

  handleQuantityChange(event) {
    const { product, removeProductFromCart, setQuantityOfProduct } = this.props
    const quantity = Number(event.target.value)

    if (!quantity) {
      return removeProductFromCart(product)
    }

    const quantityToAdd = quantity > product.stock ? product.stock : quantity

    return setQuantityOfProduct(product, quantityToAdd)
  }

  render() {
    const { product, addProductToCart, removeProductFromCart } = this.props
    const { quantity } = this.state

    return (
      <CartProductWrapper>
        <CartProductColumn>
          <CartProductInfo>{product.name}</CartProductInfo>
          <CartProductInfo>${product.price}</CartProductInfo>
        </CartProductColumn>
        <CartProductQuantity>
          <Operation onClick={() => addProductToCart(product)}>+</Operation>
          <ProductQuantity type="number" value={quantity} onChange={this.handleQuantityChange} />
          <Operation onClick={() => removeProductFromCart(product)}>-</Operation>
        </CartProductQuantity>
      </CartProductWrapper>
    )
  }
}
