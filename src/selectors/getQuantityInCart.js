import { createSelector } from 'reselect'

// Return selected dates grouped by trip type
const getQuantityInCart = createSelector(
  cart => cart,
  cart => {
    if (cart) {
      return cart.products.reduce((memo, product) => (
        memo + product.quantity
      ), 0);
    }

    return 0;
  }
);


export default getQuantityInCart;