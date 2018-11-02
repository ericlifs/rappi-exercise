import { createSelector } from 'reselect'

const getCart = state => state.cart;

export const getQuantityInCart = createSelector(
  [getCart],
  cart => {
    if (cart) {
      return cart.products.reduce((memo, product) => (
        memo + product.quantity
      ), 0);
    }

    return 0;
  }
);

export const getProductsInCart = createSelector(
  [getCart],
  cart => cart ? cart.products : []
);

export const getTotalInCart = createSelector(
  [getCart],
  cart => {
    if (cart) {
      return cart.products.reduce((memo, { quantity, price }) => (
        memo + (quantity * Number(price))
      ), 0);
    }

    return 0;
  }
);