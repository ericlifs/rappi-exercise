import { createActions } from 'redux-actions'

const { fetchProductsByCategory } = createActions({
  FETCH_PRODUCTS_BY_CATEGORY: sublevelId => ({ sublevelId }),
});

export {
  fetchProductsByCategory,
}
