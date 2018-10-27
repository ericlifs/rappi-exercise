import { createActions } from 'redux-actions'

const { addProductToCart } = createActions({
  ADD_PRODUCT_TO_CART: product => ({ product }),
});

export {
  addProductToCart,
}
