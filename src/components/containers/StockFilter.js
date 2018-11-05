import React from 'react'
import { connect } from 'react-redux'

import StockFilter from 'components/FilterBar/StockFilter'
import { setFilterFunction } from 'actions/products'
import { getFiltersValues } from 'selectors/products'

const StockFilterContainer = props => <StockFilter {...props} />

const mapStateToProps = state => ({
  filters: getFiltersValues(state)
})

const mapDispatchToProps = {
  setFilterFunction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockFilterContainer)
