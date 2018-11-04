import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PriceFilter from 'components/FilterBar/PriceFilter'
import { setFilterFunction } from 'actions/products'

const PriceFilterContainer = props => <PriceFilter {...props} />

const mapDispatchToProps = {
  setFilterFunction
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(PriceFilterContainer)
)
