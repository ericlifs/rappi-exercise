import React from 'react'

import { ProductWrapper, ProductName, ProductInfo, ProductSubline } from './styled'
import AddToCartContainer from 'containers/AddToCart'

export default function Product({ product }) {
  return (
    <ProductWrapper>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductSubline>${product.price}</ProductSubline>
        <ProductSubline>{product.available ? 'Disponible' : 'No disponible'}</ProductSubline>
        <ProductSubline>Quedan {product.quantity} en stock</ProductSubline>
      </ProductInfo>
      {product.available && <AddToCartContainer product={product} />}
    </ProductWrapper>
  )
}
