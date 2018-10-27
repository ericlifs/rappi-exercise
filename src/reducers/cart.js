import { handleActions } from 'redux-actions'
import { addProductToCart, removeProductFromCart } from 'actions/cart'

const defaultState = {
  products: []
};

const reducer = handleActions(
  {
    [addProductToCart]: (state, { payload: { product } }) => {
      const productInCart = state.products.find(cartProduct => cartProduct.id === product.id);

      if (productInCart) {
        const products = state.products.map(cartProduct => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: ++cartProduct.quantity
            }
          }

          return cartProduct;
        });

        return {
          products
        }
      }

      return {
        products: [...state.products, { ...product, quantity: 1 }]
      }
    },
    [removeProductFromCart]: (state, { payload: { product }}) => {
      const products = state.products.map(cartProduct => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: --cartProduct.quantity
          }
        }

        return cartProduct
      });

      return {
        ...state,
        products: products.filter(cartProduct => cartProduct.quantity)
      }
    }
  },
  defaultState
);

export default reducer
