import { createActions } from 'redux-actions'

const { fetchProductsByCategory, searchProducts } = createActions({
  FETCH_PRODUCTS_BY_CATEGORY: sublevelId => ({ sublevelId }),
  SEARCH_PRODUCTS: term => ({ term }),
});

export {
  fetchProductsByCategory,
  searchProducts
}
