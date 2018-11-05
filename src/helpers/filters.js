export const minValue = minValue => product =>
  !minValue ? product : Number(product.price) >= minValue

export const maxValue = maxValue => product =>
  !maxValue ? product : Number(product.price) <= maxValue

export const minStock = minValue => product => (!minValue ? product : product.quantity >= minValue)

export const maxStock = maxValue => product => (!maxValue ? product : product.quantity <= maxValue)

export const availability = available => product => product.available === available
