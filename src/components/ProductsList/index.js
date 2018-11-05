import React, { Fragment } from 'react'

import Product from './Product'
import SortBarContainer from 'components/containers/SortBar'
import FilterBarContainer from 'components/containers/FilterBar'
import SearchByTermContainer from 'components/containers/SearchByTerm'

import { ProductsListWrapper, ProductsWrapper, NoResults, Title } from './styled'

const ProductsContent = ({ products }) => {
  if (products && products.length) {
    return (
      <ProductsListWrapper>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListWrapper>
    )
  }

  return <NoResults>Perdón, no se encontraron productos</NoResults>
}

export default function ProductsList({
  products,
  title,
  fullwidth,
  filteredProducts,
  menuOpened,
  categoryProducts
}) {
  return (
    <ProductsWrapper fullwidth={fullwidth} menuOpened={menuOpened}>
      {title && <Title>{title}</Title>}
      {(categoryProducts || []).length > 0 && (
        <Fragment>
          <FilterBarContainer />
          <SortBarContainer />
          <SearchByTermContainer />
        </Fragment>
      )}
      <ProductsContent products={products || filteredProducts} />
    </ProductsWrapper>
  )
}
