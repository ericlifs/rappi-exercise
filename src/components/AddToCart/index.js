import React from 'react';

import { AddToCartWrapper } from './styled';

export default function AddToCart({ product, addProductToCart }) {
  return (
    <AddToCartWrapper onClick={() => addProductToCart(product)}>
      Agregar al carrito
    </AddToCartWrapper>
  );
}