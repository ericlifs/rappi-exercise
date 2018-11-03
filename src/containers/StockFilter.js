import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import StockFilter from 'components/FilterBar/StockFilter'
import { setFilterFunction } from 'actions/products'

const mapDispatchToProps = {
  setFilterFunction
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(StockFilter)
)
