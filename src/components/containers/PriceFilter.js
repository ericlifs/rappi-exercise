import React from 'react'
import { connect } from 'react-redux'

import PriceFilter from 'components/FilterBar/PriceFilter'
import { setFilterFunction } from 'actions/products'
import { getFiltersValues } from 'selectors/products'

const PriceFilterContainer = props => <PriceFilter {...props} />

const mapStateToProps = state => ({
  filters: getFiltersValues(state)
})

const mapDispatchToProps = {
  setFilterFunction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceFilterContainer)
