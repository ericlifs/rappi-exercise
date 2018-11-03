import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FilterBar from 'components/FilterBar';

import { setFilterFunction, setSortMethod, clearFilters } from 'actions/products';

const mapDispatchToProps = {
  setSortMethod,
  setFilterFunction,
  clearFilters
};

export default withRouter(connect(null, mapDispatchToProps)(FilterBar));
