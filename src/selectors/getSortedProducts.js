import { createSelector } from 'reselect'

const getSortedProducts = createSelector(
  products => products,
  products => {
    const { filteredProducts, sortMethod } = products;

    if (sortMethod) {
      return [...filteredProducts].sort((first, second) => (
        first[sortMethod] - second[sortMethod]
      ));
    }

    return filteredProducts;
  }
);


export default getSortedProducts;