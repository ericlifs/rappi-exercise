import { connect } from 'react-redux'

import Home from 'pages/Home'
import { fetchStaredProducts } from 'actions/products'
import { getStaredProducts } from 'selectors/products'

const mapStateToProps = state => ({
  staredProducts: getStaredProducts(state)
})

const mapDispatchToProps = {
  fetchStaredProducts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
