import React from 'react'

import { connect } from 'react-redux'

import Category from 'pages/Category'
import { fetchProductsByCategory } from 'actions/products'

const CategoryContainer = props => <Category {...props} />

const mapDispatchToProps = {
  fetchProductsByCategory
}

export default connect(
  null,
  mapDispatchToProps
)(CategoryContainer)
