import { createActions } from 'redux-actions'

const { fetchProductsByCategory, searchProducts, setSortMethod } = createActions({
  FETCH_PRODUCTS_BY_CATEGORY: sublevelId => ({ sublevelId }),
  SEARCH_PRODUCTS: term => ({ term }),
  SET_SORT_METHOD: sortMethod => ({ sortMethod }),
});

export {
  fetchProductsByCategory,
  searchProducts,
  setSortMethod
}
