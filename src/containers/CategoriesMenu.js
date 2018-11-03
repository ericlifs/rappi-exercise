import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setMenuOpened } from 'actions/ui';
import CategoriesMenu from 'components/CategoriesMenu';

const mapDispatchToProps = {
  setMenuOpened
};

export default withRouter(connect(null, mapDispatchToProps)(CategoriesMenu));
