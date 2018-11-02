import { handleActions } from 'redux-actions'
import { fetchProductsByCategory, setSearchTerm, setSortMethod, fetchStaredProducts, setFilterFunction, clearFilters } from 'actions/products'

import info from 'data/products.json'

info.products.forEach(product => {
  product.price = product.price.replace('$', '');
  product.price = product.price.replace(',', '.');
});

const defaultState = {
  categoryProducts: null,
  staredProducts: null,
  sortMethod: null,
  searchTerm: '',
  sortOrder: null,
  filters: {}
};

const reducer = handleActions(
  {
    [fetchProductsByCategory]: (state, { payload: { sublevelId } }) => {
      const categoryProducts = info.products.filter(product => product.sublevel_id === sublevelId);

      return {
        ...state,
        categoryProducts
      }
    },
    [setSearchTerm]: (state, { payload: { searchTerm } }) => ({
      ...state,
      searchTerm
    }),
    [setSortMethod]: (state, { payload: { sortMethod, sortOrder } }) => ({
      ...state,
      sortMethod,
      sortOrder
    }),
    [fetchStaredProducts]: (state, { payload: { quantity }}) => ({
      ...state,
      staredProducts: info.products.sort(() => .5 - Math.random()).slice(0, quantity)
    }),
    [setFilterFunction]: (state, { payload: { name, filter }}) => ({
      ...state,
      filters: {
        ...state.filters,
        [name]: filter
      }
    }),
    [clearFilters]: (state) => ({
      ...state,
      filters: {}
    })
  },
  defaultState
);

export default reducer
