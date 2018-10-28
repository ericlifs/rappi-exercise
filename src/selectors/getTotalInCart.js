import { createSelector } from 'reselect'

const getTotalInCart = createSelector(
  cart => cart,
  cart => {
    if (cart) {
      return cart.products.reduce((memo, { quantity, price }) => (
        memo + (quantity * price)
      ), 0);
    }

    return 0;
  }
);


export default getTotalInCart;