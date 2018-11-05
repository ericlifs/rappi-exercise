import React from 'react'

import { connect } from 'react-redux'

import Home from 'pages/Home'
import { fetchStaredProducts } from 'actions/products'
import { getStaredProducts } from 'selectors/products'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state => ({
  staredProducts: getStaredProducts(state)
})

const mapDispatchToProps = {
  fetchStaredProducts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
