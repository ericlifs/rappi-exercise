import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import SortBar from 'components/SortBar'
import { setSortMethod } from 'actions/products'

const SortBarContainer = props => <SortBar {...props} />

const mapDispatchToProps = {
  setSortMethod
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SortBarContainer)
)
