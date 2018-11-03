import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CategoriesMenu from 'components/CategoriesMenu'
import { setMenuOpened } from 'actions/ui'

const mapDispatchToProps = {
  setMenuOpened
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CategoriesMenu)
)
