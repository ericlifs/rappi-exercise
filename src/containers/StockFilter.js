import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import StockFilter from 'components/FilterBar/StockFilter'
import { setFilterFunction } from 'actions/products'

const StockFilterContainer = props => <StockFilter {...props} />

const mapDispatchToProps = {
  setFilterFunction
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(StockFilterContainer)
)
