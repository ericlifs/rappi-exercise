import { createActions } from 'redux-actions'

const { fetchProductsByCategory, searchProducts, setSortMethod, fetchStaredProducts } = createActions({
  FETCH_PRODUCTS_BY_CATEGORY: sublevelId => ({ sublevelId }),
  SEARCH_PRODUCTS: term => ({ term }),
  SET_SORT_METHOD: (sortMethod, sortOrder) => ({ sortMethod, sortOrder }),
  FETCH_STARED_PRODUCTS: quantity => ({ quantity }),
});

export {
  fetchProductsByCategory,
  searchProducts,
  setSortMethod,
  fetchStaredProducts
}
