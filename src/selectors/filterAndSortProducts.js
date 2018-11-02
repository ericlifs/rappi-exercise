import { createSelector } from 'reselect'

const filterAndSortProducts = createSelector(
  products => products,
  products => {
    const { categoryProducts, sortMethod, sortOrder, filters } = products;

    if (!categoryProducts) {
      return null;
    }

    const filteredProducts = categoryProducts.filter(product => Object.values(filters).every(filter => filter(product)));

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


export default filterAndSortProducts;