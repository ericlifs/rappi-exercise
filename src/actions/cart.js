import { createActions } from 'redux-actions'

const { addProductToCart, removeProductFromCart, checkoutProducts } = createActions({
  ADD_PRODUCT_TO_CART: product => ({ product }),
  REMOVE_PRODUCT_FROM_CART: product => ({ product }),
  CHECKOUT_PRODUCTS: () => {},
});

export {
  addProductToCart,
  removeProductFromCart,
  checkoutProducts
}
