import { createSelector } from 'reselect'

export const getProducts = state => state.products

export const getStaredProducts = createSelector(
  [getProducts],
  products => (products && products.staredProducts ? products.staredProducts : [])
)

export const getCategoryProducts = createSelector(
  [getProducts],
  products => (products && products.categoryProducts ? products.categoryProducts : [])
)

export const filterAndSortProducts = createSelector(
  [getProducts, getCategoryProducts],
  (products, categoryProducts) => {
    const { sortMethod, sortOrder, filters, searchTerm } = products

    const filteredByTerm = categoryProducts.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const filteredProducts = filteredByTerm.filter(product =>
      Object.values(filters).every(filter => filter(product))
    )

    if (sortMethod) {
      return [...filteredProducts].sort((first, second) => {
        if (sortOrder === 'desc') {
          return second[sortMethod] - first[sortMethod]
        }

        return first[sortMethod] - second[sortMethod]
      })
    }

    return filteredProducts
  }
)
