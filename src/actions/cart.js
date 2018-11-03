import { createActions } from 'redux-actions'

const {
  addProductToCart,
  removeProductFromCart,
  checkoutProducts,
  setQuantityOfProduct
} = createActions({
  ADD_PRODUCT_TO_CART: product => ({ product }),
  REMOVE_PRODUCT_FROM_CART: product => ({ product }),
  CHECKOUT_PRODUCTS: () => {},
  SET_QUANTITY_OF_PRODUCT: (product, quantity) => ({ product, quantity })
})

export { addProductToCart, removeProductFromCart, checkoutProducts, setQuantityOfProduct }
