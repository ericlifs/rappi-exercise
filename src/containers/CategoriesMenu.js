import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CategoriesMenu from 'components/CategoriesMenu'
import { setMenuOpened } from 'actions/ui'

const CategoriesMenuContainer = props => <CategoriesMenu {...props} />

const mapDispatchToProps = {
  setMenuOpened
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CategoriesMenuContainer)
)
