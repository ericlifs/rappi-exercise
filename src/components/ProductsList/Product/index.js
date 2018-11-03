import React from 'react'

import { ProductWrapper, ProductName, ProductInfo, ProductSubline } from './styled'
import AddToCartContainer from 'containers/AddToCart'

const Product = ({ product }) => (
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

export default Product
