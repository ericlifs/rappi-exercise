import { createSelector } from 'reselect'

const getProductsInCart = createSelector(
  cart => cart,
  cart => cart ? cart.products : []
);


export default getProductsInCart;