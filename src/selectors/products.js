import { createSelector } from 'reselect'

export const getProducts = state => state.products;

export const getStaredProducts = createSelector(
  [getProducts],
  products => products ? products.staredProducts : []
);


export default getStaredProducts;