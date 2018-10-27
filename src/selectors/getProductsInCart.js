import { createSelector } from 'reselect'

// Return selected dates grouped by trip type
const getProductsInCart = createSelector(
  cart => cart,
  cart => cart ? cart.products : []
);


export default getProductsInCart;