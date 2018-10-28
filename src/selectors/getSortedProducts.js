import { createSelector } from 'reselect'

const getSortedProducts = createSelector(
  products => products,
  products => {
    const { filteredProducts, sortMethod, sortOrder } = products;

    if (sortMethod) {
      return [...filteredProducts].sort((first, second) => {
        if (sortOrder === 'desc') {
          return second[sortMethod] - first[sortMethod];
        }

        return first[sortMethod] - second[sortMethod];
      });
    }

    return filteredProducts;
  }
);


export default getSortedProducts;