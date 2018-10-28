import { createSelector } from 'reselect'

const getTotalInCart = createSelector(
  cart => cart,
  cart => {
    if (cart) {
      return cart.products.reduce((memo, product) => {
        const productPrice = Number(product.price.replace('$', '').replace(',', '.'));

        return memo + (product.quantity * productPrice);
      }, 0);
    }

    return 0;
  }
);


export default getTotalInCart;