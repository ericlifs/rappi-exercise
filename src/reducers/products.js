import { handleActions } from 'redux-actions'
import { fetchProductsByCategory, searchProducts, setSortMethod, fetchStaredProducts } from 'actions/products'

import info from 'data/products.json'

info.products.forEach(product => {
  product.price = product.price.replace('$', '');
  product.price = product.price.replace(',', '.');
});

const defaultState = {
  categoryProducts: null,
  filteredProducts: null,
  staredProducts: null,
  sortMethod: null,
  sortOrder: null
};

const reducer = handleActions(
  {
    [fetchProductsByCategory]: (state, { payload: { sublevelId } }) => {
      const filteredProducts = info.products.filter(product => product.sublevel_id === sublevelId);

      return {
        categoryProducts: filteredProducts,
        filteredProducts: filteredProducts
      }
    },
    [searchProducts]: (state, { payload: { term } }) => ({
      ...state,
      filteredProducts: state.categoryProducts.filter(product => product.name.toLowerCase().includes(term.toLowerCase()))
    }),
    [setSortMethod]: (state, { payload: { sortMethod, sortOrder } }) => ({
      ...state,
      sortMethod,
      sortOrder
    }),
    [fetchStaredProducts]: (state, { payload: { quantity }}) => ({
      ...state,
      staredProducts: info.products.sort(() => .5 - Math.random()).slice(0, quantity)
    })
  },
  defaultState
);

export default reducer
