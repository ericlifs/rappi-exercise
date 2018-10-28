import { handleActions } from 'redux-actions'
import { fetchProductsByCategory, searchProducts } from 'actions/products'

import info from 'data/products.json'

const defaultState = {
  categoryProducts: null,
  filteredProducts: null
};

const reducer = handleActions(
  {
    [fetchProductsByCategory]: (state, { payload: { sublevelId } }) => {
      const categoryProducts = info.products.filter(product => product.sublevel_id === sublevelId);

      return {
        categoryProducts,
        filteredProducts: categoryProducts
      }
    },
    [searchProducts]: (state, { payload: { term } }) => ({
      ...state,
      filteredProducts: state.categoryProducts.filter(product => product.name.includes(term))
    })
  },
  defaultState
);

export default reducer
