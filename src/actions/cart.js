import { createActions } from 'redux-actions'

const { addProductToCart, removeProductFromCart } = createActions({
  ADD_PRODUCT_TO_CART: product => ({ product }),
  REMOVE_PRODUCT_FROM_CART: product => ({ product }),
});

export {
  addProductToCart,
  removeProductFromCart
}
