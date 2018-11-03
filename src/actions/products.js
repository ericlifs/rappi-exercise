import { createActions } from 'redux-actions'

const {
  fetchProductsByCategory,
  setSearchTerm,
  setSortMethod,
  fetchStaredProducts,
  setFilterFunction,
  clearFilters
} = createActions({
  FETCH_PRODUCTS_BY_CATEGORY: sublevelId => ({ sublevelId }),
  SET_SEARCH_TERM: searchTerm => ({ searchTerm }),
  SET_SORT_METHOD: (sortMethod, sortOrder) => ({ sortMethod, sortOrder }),
  FETCH_STARED_PRODUCTS: quantity => ({ quantity }),
  SET_FILTER_FUNCTION: (name, filter) => ({ name, filter }),
  CLEAR_FILTERS: () => {}
})

export {
  fetchProductsByCategory,
  setSearchTerm,
  setSortMethod,
  fetchStaredProducts,
  setFilterFunction,
  clearFilters
}
