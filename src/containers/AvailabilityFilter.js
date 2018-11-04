import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setFilterFunction } from 'actions/products'

import AvailabilityFilter from 'components/FilterBar/AvailabilityFilter'

const AvailabilityFilterContainer = props => <AvailabilityFilter {...props} />

const mapDispatchToProps = {
  setFilterFunction
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AvailabilityFilterContainer)
)
