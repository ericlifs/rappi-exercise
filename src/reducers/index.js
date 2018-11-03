import { combineReducers } from 'redux'

import products from './products'
import cart from './cart'
import ui from './ui'

const rootReducer = combineReducers({
  products,
  cart,
  ui
})

export default rootReducer
