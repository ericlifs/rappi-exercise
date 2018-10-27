import { handleActions } from 'redux-actions'
import { fetchProductsByCategory } from 'actions/products'

import info from 'data/products.json'

const defaultState = {
  data: info.products,
  results: null
};

const reducer = handleActions(
  {
    [fetchProductsByCategory]: (state, { payload: { sublevelId } }) => ({
      ...state,
      results: state.data.filter(product => product.sublevel_id === sublevelId)
    })
  },
  defaultState
);

export default reducer
