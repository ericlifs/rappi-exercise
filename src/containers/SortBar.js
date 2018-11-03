import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SortBar from 'components/SortBar';
import { setSortMethod } from 'actions/products';

const mapDispatchToProps = {
  setSortMethod
};

export default withRouter(connect(null, mapDispatchToProps)(SortBar));
