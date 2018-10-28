import { handleActions } from 'redux-actions'
import { fetchProductsByCategory, searchProducts, setSortMethod } from 'actions/products'

import info from 'data/products.json'

const defaultState = {
  categoryProducts: null,
  filteredProducts: null,
  sortMethod: null
};

const reducer = handleActions(
  {
    [fetchProductsByCategory]: (state, { payload: { sublevelId } }) => {
      const filteredProducts = info.products.filter(product => product.sublevel_id === sublevelId);
      filteredProducts.forEach(product => {
        product.price = product.price.replace('$', '');
        product.price = Number(product.price.replace(',', '.'));
      });

      return {
        categoryProducts: filteredProducts,
        filteredProducts: filteredProducts
      }
    },
    [searchProducts]: (state, { payload: { term } }) => ({
      ...state,
      filteredProducts: state.categoryProducts.filter(product => product.name.includes(term))
    }),
    [setSortMethod]: (state, { payload: { sortMethod } }) => ({
      ...state,
      sortMethod
    })
  },
  defaultState
);

export default reducer
