import React from 'react'

import { connect } from 'react-redux'
import { setFilterFunction } from 'actions/products'

import AvailabilityFilter from 'components/FilterBar/AvailabilityFilter'
import { getFiltersValues } from 'selectors/products'

const AvailabilityFilterContainer = props => <AvailabilityFilter {...props} />

const mapStateToProps = state => ({
  filters: getFiltersValues(state)
})

const mapDispatchToProps = {
  setFilterFunction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailabilityFilterContainer)
