import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import SearchByTerm from 'components/SearchByTerm'
import { setSearchTerm } from 'actions/products'
import { getSearchTerm } from 'selectors/products'

const SearchByTermContainer = props => <SearchByTerm {...props} />

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state)
})

const mapDispatchToProps = {
  setSearchTerm
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchByTermContainer)
)
